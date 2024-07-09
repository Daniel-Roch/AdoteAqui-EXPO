import { StyleSheet } from "react-native";
import { Box, Image, Text } from "native-base";
import { useUser } from "@clerk/clerk-expo";

export default function AccountScreen() {
  const { user } = useUser();

  return (
    <Box style={styles.outerContainer}>
      <Text style={styles.headerText}>Perfil:</Text>
      <Box style={styles.innerContainer}>
        <Image
          source={{ uri: user?.imageUrl }}
          alt="Profile Image"
          style={styles.profileImage}
        />
        <Text style={styles.infoText}>Nome: {user?.firstName}</Text>
        <Text style={styles.infoText}>
          Email: {user?.primaryEmailAddress?.emailAddress}
        </Text>
      </Box>
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
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
});
