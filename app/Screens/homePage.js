import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

const image = { uri: "https://www.enjpg.com/img/2020/4k-for-mobile-3.jpg" };

function homePage({ navigation }) {
  const [poisonCounters, setPoisonCounters] = useState(0);

  const increasePoisonCounters = () => {
    console.log("Poison counters increased by one");
    setPoisonCounters(poisonCounters + 1);
  };

  const sendToSingleLifeTotal = () => {
    console.log(
      "Clicking this button will route the user to 'singleLifeTotal'"
    );
    // navigates the the "otherTestScreen"
    navigation.navigate("Single");
  };

  const sendToTwoPlayer = () => {
    console.log(
      "Clicking this button will route the user to 'two player mode'"
    );
    // navigates the the "otherTestScreen"
    navigation.navigate("Two");
  };

  return (
    <ImageBackground source={image} style={styles.background}>
      <Text style={styles.poisonText}>Number of players:</Text>
      <Text style={styles.onePlayer} onPress={() => sendToSingleLifeTotal()}>
        One Player
      </Text>
      <Text style={styles.twoPlayer} onPress={() => sendToTwoPlayer()}>
        Two Players
      </Text>

      {/* place holders for buttons that will be added later. */}
      <View style={styles.loginButton} />

      <View style={styles.registerButton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "purple",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "gray",
  },
  poisonText: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    top: 200,
  },
  onePlayer: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    top: 260,
  },
  twoPlayer: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    top: 320,
  }
});

export default homePage;
