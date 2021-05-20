import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Alert,
  TouchableOpacity,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

// const image = { uri: "https://www.enjpg.com/img/2020/4k-mobile-7.jpg" };
const image = { uri: "https://www.enjpg.com/img/2020/4k-for-mobile-3.jpg" };

function singleLifeTotal({ navigation }) {
  const startingLifeTotal = 40;
  const [playerOneLifeTotal, setPlayerOneLifeTotal] =
    useState(startingLifeTotal);
  const [playerTwoLifeTotal, setPlayerTwoLifeTotal] =
    useState(startingLifeTotal);

  const increaseLife = (player) => {
    let currentLifeTotal;
    if (player === 1) {
      currentLifeTotal = playerOneLifeTotal + 1;
      setPlayerOneLifeTotal(currentLifeTotal);
    } else {
      currentLifeTotal = playerTwoLifeTotal + 1;
      setPlayerTwoLifeTotal(currentLifeTotal);
    }
  };

  const decreaseLife = (player) => {
    let currentLifeTotal;
    if (player === 1) {
      currentLifeTotal = playerOneLifeTotal - 1;
      setPlayerOneLifeTotal(currentLifeTotal);
    } else {
      currentLifeTotal = playerTwoLifeTotal - 1;
      setPlayerTwoLifeTotal(currentLifeTotal);
    }
    console.log("decreasing life total", currentLifeTotal);
    
  };

  const resetGame = () => {
    console.log("resetting game");

    setPlayerOneLifeTotal(startingLifeTotal);
  };

  // used to detect if the screen is in portrait or landscape mode
  const { landscape } = useDeviceOrientation();

  const sendToOtherScreen = () => {
    console.log(
      "Clicking this button will route the user to 'otherTestScreen'"
    );
    // navigates the the "otherTestScreen"
    navigation.navigate("Other");
  };

  return (
    <ImageBackground source={image} style={styles.background}>
      {/* --------------------------- Player one section --------------------------- */}
      <View style={styles.containerOne}>
        <TouchableOpacity
          style={styles.decreaseLife}
          onPress={() => decreaseLife(1)}
        />

        <Text style={styles.textOne}>Life Total:</Text>
        <Text style={styles.playerOneLifeTotal}>{playerOneLifeTotal}</Text>

        <TouchableOpacity
          style={styles.increaseLife}
          onPress={() => increaseLife(1)}
        />
      </View>

      {/* --------------------------- End of Player one section --------------------------- */}

      {/* --------------------------- Player two section --------------------------- */}
      <View style={styles.containerTwo}>
        <TouchableOpacity
          style={styles.decreaseLife}
          onPress={() => decreaseLife(2)}
        />

        <Text style={styles.textTwo}>Life Total:</Text>
        <Text style={styles.playerOneLifeTotal}>{playerTwoLifeTotal}</Text>

        <TouchableOpacity
          style={styles.increaseLife}
          onPress={() => increaseLife(2)}
        />
      </View>

      <View style={styles.resetButtonArea}>
        <View>
          <Text
            style={styles.resetButton}
            onPress={() =>
              Alert.alert(
                "Resetting game",
                "Are you sure you want reset all values?",
                [
                  { text: "yes", onPress: () => resetGame() },
                  {
                    text: "no",
                    onPress: () => console.log("Totals were not reset"),
                  },
                ]
              )
            }
          >
            Reset
          </Text>
        </View>
        {/* </TouchableOpacity> */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // style for the container
  containerOne: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    transform: [
        // { rotateY: "90deg" },
        { rotateZ: "180deg" }
      ]
  },
  containerTwo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  commanderButton: {
    flexDirection: "row",
    justifyContent: "center",
    top: 311,
  },
  resetButtonArea: {
    flexDirection: "row",
    justifyContent: "center",
    bottom: 37,
  },
  resetButton: {
    color: "red",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: -20,
    fontSize: 42,
    textAlign: "center",
    // backgroundColor: "black",
  },
  increaseLife: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "rgba(0,200,0,0.25)",
  },
  decreaseLife: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "rgba(200,0,0,0.25)",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  playerOneLifeTotal: {
    flex: 0.6,
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    width: 192,
    height: 150,
    color: "white",
    fontSize: 100,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "black",
    zIndex: 1000,
  },
  textOne: {
    // flex: 0.4,
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    top: 45,
    width: 125,
    height: 60,
    color: "white",
    fontSize: 24,
    textAlign: "center",
    // backgroundColor: "grey",
    zIndex: 1000,
  },
  textTwo: {
    // flex: 0.4,
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    top: 45,
    width: 125,
    height: 60,
    color: "white",
    fontSize: 24,
    textAlign: "center",
    // backgroundColor: "grey",
    zIndex: 1000,
  },
  image: {
    marginBottom: 15,
  },
});

export default singleLifeTotal;
