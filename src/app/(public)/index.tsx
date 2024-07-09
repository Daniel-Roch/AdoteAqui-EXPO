import { useEffect, useState } from "react";
import { Box, Image, Text } from "native-base";
import { Button } from "@/components/Button";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { styles } from "./styles";

//Abrir browser para se logar
WebBrowser.maybeCompleteAuthSession();

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const imgLogo = require("../../assets/images/logo-adoteaqui.png");
  //Usar para fazer a autenticação
  const googleOAuth = useOAuth({ strategy: "oauth_google" });

  async function onGooglesignIn() {
    try {
      setIsLoading(true);
      const redirectUrl = Linking.createURL("/");
      const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectUrl });

      if (oAuthFlow.authSessionResult?.type == "success") {
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
        }
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    WebBrowser.warmUpAsync();

    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  return (
    <Box style={styles.container}>
      <Image
        source={imgLogo}
        alt="Adote Aqui"
        size="2xl"
        style={styles.containerImage}
      />
      <Text style={styles.text}>Entrar</Text>
      <Button
        icon="logo-google"
        title="Entrar com Google"
        onPress={onGooglesignIn}
        isLoading={isLoading}
      />
    </Box>
  );
}
