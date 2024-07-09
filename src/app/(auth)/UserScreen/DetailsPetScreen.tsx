import { StyleSheet } from "react-native";
import { Box, Button, Text } from "native-base";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function DetailsPetScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const handleLogo = () => {
    router.push("/");
  };

  return (
    <Box style={styles.outerContainer}>
      <Text>Pet Card Descrição {id}</Text>
      <Button onPress={handleLogo}>Voltar</Button>
    </Box>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
