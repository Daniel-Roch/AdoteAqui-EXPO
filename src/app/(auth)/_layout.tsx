import { Stack, useLocalSearchParams } from "expo-router";
import Header from "@/components/Header";

export default function RootLayout() {
  const params = useLocalSearchParams();

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ header: () => <Header /> }} />
      <Stack.Screen
        name="UserScreen/DetailsPetScreen"
        options={{ header: () => <Header /> }}
      />
    </Stack>
  );
}
