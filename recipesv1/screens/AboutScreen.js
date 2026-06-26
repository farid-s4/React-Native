import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>
            Проект по работе с навигацией, адаптивными списками и экранами в React Native.
        </Text>
      </View>
      <Text style={styles.footer}>
            Cook!
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", 
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 35,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text:{
    fontSize: 15,
    color: "#000000",
    textAlign: "center",
    fontSize: 19,    
  },
  footer: {
    fontSize: 12,
    color: "#94a3b8",
  },
});

export default AboutScreen;