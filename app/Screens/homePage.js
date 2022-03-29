import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, } from "react-native";

const image = { uri: "https://www.enjpg.com/img/2020/4k-for-mobile-3.jpg" };

function homePage({ navigation }) {
  {
    /* --------------------------- Navigation Section --------------------------- */
  }
  const sendToSingleLifeTotal = () => {
    navigation.navigate("Single");
  };

  const sendToTwoPlayer = () => {
    navigation.navigate("Two");
  };

  const sendToThreePlayer = () => {
    navigation.navigate("Three");
  };

  // const sendToFourPlayer = () => {
  //   navigation.navigate("Four");
  // };
  {
    /* --------------------------- End of Navigation Section --------------------------- */
  }

  return (
    <ImageBackground source={image} style={styles.background}>
      <Text style={styles.numberOfPlayersText}>Number of players:</Text>
      {/* --------------------------- Navigates to Single Player Mode --------------------------- */}
      <Text style={styles.onePlayer} onPress={() => sendToSingleLifeTotal()}>
        One Player
      </Text>
      {/* --------------------------- Navigates to Two Player Mode --------------------------- */}
      <Text style={styles.twoPlayer} onPress={() => sendToTwoPlayer()}>
        Two Players
      </Text>
      {/* --------------------------- Navigates to Three Player Mode --------------------------- */}
      <Text style={styles.threePlayer} onPress={() => sendToThreePlayer()}>
        Three Players
      </Text>
      {/* --------------------------- Navigates to Four Player Mode --------------------------- */}
      {/* <Text style={styles.fourPlayer} onPress={() => sendToFourPlayer()}>
        Four Players
      </Text> */}

      {/* place holders for buttons that may be added later. */}
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
  numberOfPlayersText: {
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
  },
  threePlayer: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    top: 380,
  },
  fourPlayer: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    top: 440,
  },
});

export default homePage;
