import { View, Text, Image, StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
export default function ProfileCard({
  name,
  age,
  role,
  avatar,
  status,
  cardBackgroundColor,
}) {
  return (
    <View style={[styles.card,{ backgroundColor: cardBackgroundColor }]}>
      <ImageBackground
        source={{ uri: avatar }}
        style={styles.avatar}
        imageStyle={{ borderRadius: 50 }}
      >
        <View
          style={[
            styles.userStatus,
            { backgroundColor: status === "true" ? "green" : "grey" },
          ]}
        />
      </ImageBackground>
      <View style={styles.textCard}>
        <Text style={styles.name}>Name: {name}</Text>
        <Text style={styles.info}>{age} years old</Text>
        <Text style={styles.info}>{role}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 300,
  },
  textCard: {
    marginLeft: 15,
    justifyContent: "center",
  },
  userStatus: {
    width: 12,
    height: 12,
    borderRadius: 6,
    position: "absolute",
    bottom: 0,
    right: 0,
    borderWidth: 2,
    borderColor: "#fff",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  info: {
    fontSize: 14,
    color: "#666",
  },
});
