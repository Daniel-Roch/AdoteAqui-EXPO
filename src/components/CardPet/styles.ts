import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  boxTextCardPet: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  textTitleCardPet: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  textDescriptCardPet: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  textLocationCardPet: {
    color: "white",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});
