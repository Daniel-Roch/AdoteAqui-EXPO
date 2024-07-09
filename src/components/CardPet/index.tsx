import React from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { Text, Box } from "native-base";
import { styles } from "./styles";

interface Pet {
  id: number;
  name: string;
  image: string;
  link: string;
  available: boolean;
  description: string;
  location: string;
}

interface CardPetProps {
  pet: Pet;
  handleClick: (id: number) => void;
}

export const CardPet: React.FC<CardPetProps> = ({ pet, handleClick }) => {
  return (
    <ImageBackground
      source={{ uri: pet.image }}
      style={styles.imageBackground}
      borderRadius={10}
    >
      <TouchableOpacity
        onPress={() => handleClick(pet.id)}
        style={styles.boxTextCardPet}
      >
        <Box>
          <Text style={styles.textTitleCardPet}>{pet.name}</Text>
          <Text style={styles.textDescriptCardPet}>{pet.description}</Text>
          <Text style={styles.textLocationCardPet}>{pet.location}</Text>
        </Box>
      </TouchableOpacity>
    </ImageBackground>
  );
};
