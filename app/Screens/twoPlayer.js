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

// Image used for the background
const image = { uri: "https://www.enjpg.com/img/2020/4k-for-mobile-3.jpg" };

{
  /* --------------------------- Sets the starting Life Total --------------------------- */
}
function singleLifeTotal() {
  const startingLifeTotal = 40;
  const [playerOneLifeTotal, setPlayerOneLifeTotal] =
    useState(startingLifeTotal);
  const [playerTwoLifeTotal, setPlayerTwoLifeTotal] =
    useState(startingLifeTotal);

  {
    /* --------------------------- Increase Life Total section --------------------------- */
  }
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

  {
    /* --------------------------- End of Increase Life Total section --------------------------- */
  }

  {
    /* --------------------------- Decrease Life Total section --------------------------- */
  }

  const decreaseLife = (player) => {
    let currentLifeTotal;
    if (player === 1) {
      currentLifeTotal = playerOneLifeTotal - 1;
      setPlayerOneLifeTotal(currentLifeTotal);
    } else {
      currentLifeTotal = playerTwoLifeTotal - 1;
      setPlayerTwoLifeTotal(currentLifeTotal);
    }
  };

  {
    /* --------------------------- End of Decrease Life Total section --------------------------- */
  }

  {
    /* --------------------------- Reset Life Total section --------------------------- */
  }
  const resetGame = () => {
    console.log("resetting game");

    setPlayerOneLifeTotal(startingLifeTotal);
    setPlayerTwoLifeTotal(startingLifeTotal);
  };
  {
    /* --------------------------- Reset Life Total section --------------------------- */
  }

  return (
    <ImageBackground source={image} style={styles.background}>
      {/* --------------------------- Player one section --------------------------- */}
      <View style={styles.containerOne}>
        <TouchableOpacity
          style={styles.decreaseLife}
          onPress={() => decreaseLife(1)}
        />

        <Text style={styles.text}>Life Total:</Text>
        <Text style={styles.lifeTotal}>{playerOneLifeTotal}</Text>

        <TouchableOpacity
          style={styles.increaseLife}
          onPress={() => increaseLife(1)}
        />
      </View>

      {/* --------------------------- End of Player one section --------------------------- */}

      <Text style={styles.plusSign}>+</Text>
      <Text style={styles.minusSign}>-</Text>

      {/* --------------------------- Player two section --------------------------- */}
      <View style={styles.containerTwo}>
        <TouchableOpacity
          style={styles.decreaseLife}
          onPress={() => decreaseLife(2)}
        />

        <Text style={styles.text}>Life Total:</Text>
        <Text style={styles.lifeTotal}>{playerTwoLifeTotal}</Text>

        <TouchableOpacity
          style={styles.increaseLife}
          onPress={() => increaseLife(2)}
        />
      </View>

      {/* --------------------------- End of Player two section --------------------------- */}

      <Text style={styles.plusSign}>+</Text>
      <Text style={styles.minusSign}>-</Text>
      
      {/* --------------------------- Reset Button section --------------------------- */}

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
      </View>
      {/* --------------------------- End of Reset Button section --------------------------- */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // style for the container
  containerOne: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    transform: [{ rotateZ: "180deg" }],
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
    zIndex: 1000,
    // backgroundColor: "black",
  },
  increaseLife: {
    flex: 1,
    flexDirection: "row",
    zIndex: 10,
    // backgroundColor: "rgba(0,200,0,0.25)",
  },
  plusSign: {
    flexDirection: "row",
    alignSelf: "flex-end",
    position: "absolute",
    color: "white",
    fontSize: 50,
    right: 60,
  },
  decreaseLife: {
    flex: 1,
    flexDirection: "row",
    zIndex: 10,
    // backgroundColor: "rgba(200,0,0,0.25)",
  },
  minusSign: {
    flexDirection: "row",
    position: "absolute",
    color: "white",
    fontSize: 90,
    left: 60,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  lifeTotal: {
    flex: 0.6,
    alignSelf: "center",
    position: "absolute",
    width: 192,
    height: 150,
    color: "white",
    fontSize: 100,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "black",
  },
  text: {
    position: "absolute",
    top: 45,
    width: 125,
    height: 60,
    color: "white",
    fontSize: 24,
    textAlign: "center",
    // backgroundColor: "grey",
  },
  image: {
    marginBottom: 15,
  },
});

export default singleLifeTotal;
