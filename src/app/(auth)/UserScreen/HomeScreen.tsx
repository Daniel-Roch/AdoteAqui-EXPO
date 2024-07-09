import { StyleSheet, Alert, Dimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from "react-native-gesture-handler";
import { Colors } from "@/constants/Colors";
import pets from "../../../../mock/pets.json";
import { CardPet } from "@/components/CardPet";
import { useRouter } from "expo-router";

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

const { width, height } = Dimensions.get("screen");

export default function HomeScreen() {
  const translationX = useSharedValue(0);
  const prevTranslationX = useSharedValue(0);
  const router = useRouter();

  const handleLogo = (id: number) => {
    router.push({
      pathname: "UserScreen/DetailsPetScreen",
      params: { id: String(id) },
    });
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translationX.value }],
  }));

  const pan = Gesture.Pan()
    .onStart(() => {
      prevTranslationX.value = translationX.value;
    })
    .onUpdate((event) => {
      const maxTranslateX = width / 2;

      translationX.value = clamp(
        prevTranslationX.value + event.translationX,
        -maxTranslateX,
        maxTranslateX
      );
    })
    .onEnd(() => {
      if (translationX.value > 0) {
        Alert.alert(String("Direita"));
      }
      if (translationX.value < 0) {
        Alert.alert(String("Esquerda"));
      }
      translationX.value = 0;
    })
    .runOnJS(true);

  return (
    <GestureHandlerRootView style={styles.containerHome}>
      <GestureDetector gesture={pan}>
        <Animated.View style={[styles.cardHome, animatedStyles]}>
          <CardPet pet={pets[0]} handleClick={() => handleLogo(pets[0].id)} />
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  containerHome: {},
  cardHome: {
    width: width / 2 + 120,
    height: height / 2 + 120,
    backgroundColor: Colors.theme.header,
    borderRadius: 10,
    top: height / 2 - 400,
    left: width / 2 - 155,
  },
});
