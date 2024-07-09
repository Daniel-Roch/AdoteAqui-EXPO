import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { HStack, Text, Image } from "native-base";
import { useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Header: React.FC = () => {
  const router = useRouter();
  const imgLogo = require("../../assets/images/logo-adoteaqui.png");
  const { signOut } = useAuth();

  const handleLogo = () => {
    router.push("/");
  };

  return (
    <HStack
      bg="primary.500"
      alignItems="center"
      justifyContent="space-between"
      pr={2}
    >
      <TouchableOpacity onPress={handleLogo}>
        <HStack alignItems="center">
          <Image source={imgLogo} alt="Adote Aqui" size="lg" />
          <Text color="white" fontSize="26" fontWeight="bold">
            ADOTE AQUI
          </Text>
        </HStack>
      </TouchableOpacity>
      <HStack alignItems="center" space={4}>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="options" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => signOut()}>
          <Ionicons name="exit-outline" size={24} color="white" />
        </TouchableOpacity>
      </HStack>
    </HStack>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 70,
  },
});

export default Header;
