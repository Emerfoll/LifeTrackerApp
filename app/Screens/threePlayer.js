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
function threeLifeTotal() {
  const startingLifeTotal = 40;
  const [playerOneLifeTotal, setPlayerOneLifeTotal] =
    useState(startingLifeTotal);
  const [playerTwoLifeTotal, setPlayerTwoLifeTotal] =
    useState(startingLifeTotal);
  const [playerThreeLifeTotal, setPlayerThreeLifeTotal] =
    useState(startingLifeTotal);

  {
    /* --------------------------- Increase Life Total section --------------------------- */
  }
  const increaseLife = (player) => {
    let currentLifeTotal;
    if (player === 1) {
      currentLifeTotal = playerOneLifeTotal + 1;
      setPlayerOneLifeTotal(currentLifeTotal);
    } else if (player === 2) {
      currentLifeTotal = playerTwoLifeTotal + 1;
      setPlayerTwoLifeTotal(currentLifeTotal);
    } else {
      currentLifeTotal = playerThreeLifeTotal + 1;
      setPlayerThreeLifeTotal(currentLifeTotal);
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
    } else if (player === 2) {
      currentLifeTotal = playerTwoLifeTotal - 1;
      setPlayerTwoLifeTotal(currentLifeTotal);
    } else {
      currentLifeTotal = playerThreeLifeTotal - 1;
      setPlayerThreeLifeTotal(currentLifeTotal);
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
    setPlayerThreeLifeTotal(startingLifeTotal);
  };
  {
    /* --------------------------- Reset Life Total section --------------------------- */
  }

  return (
    <ImageBackground source={image} style={styles.background}>
      <View style={styles.playerOneAndTwo}>
      {/* --------------------------- Player one section --------------------------- */}
      <View style={styles.containerOne}>
        <TouchableOpacity
          style={styles.decreaseLife}
          onPress={() => decreaseLife(1)}
        />

        <Text style={styles.minusSign}>-</Text>

        <Text style={styles.text}>Life Total:</Text>
        <Text style={styles.lifeTotal}>{playerOneLifeTotal}</Text>

        <Text style={styles.plusSign}>+</Text>

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
        <Text style={styles.minusSign}>-</Text>

        <Text style={styles.text}>Life Total:</Text>
        <Text style={styles.lifeTotal}>{playerTwoLifeTotal}</Text>

        <Text style={styles.plusSign}>+</Text>

        <TouchableOpacity
          style={styles.increaseLife}
          onPress={() => increaseLife(2)}
        />
      </View>
      </View>
      {/* --------------------------- End of Player two section --------------------------- */}

      <View style={styles.playerThree}>
      {/* --------------------------- Player Three section --------------------------- */}
      <View style={styles.containerOne}>
        <TouchableOpacity
          style={styles.decreaseLife}
          onPress={() => decreaseLife(3)}
        />

        <Text style={styles.minusSignPlayerThree}>-</Text>

        <Text style={styles.textPlayerThree}>Life Total:</Text>
        <Text style={styles.lifeTotal}>{playerThreeLifeTotal}</Text>

        <Text style={styles.plusSignPlayerThree}>+</Text>

        <TouchableOpacity
          style={styles.increaseLife}
          onPress={() => increaseLife(3)}
        />
      </View>
</View>

      {/* --------------------------- End of Player Three section --------------------------- */}

      

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
  playerOneAndTwo: {
    flex: .55,
    flexDirection: "column",
    justifyContent: "center",
    transform: [{ rotateZ: "90deg" }],
    // backgroundColor: "purple"
  },
  playerThree: {
    flex: .55,
    flexDirection: "column",
    justifyContent: "center",
    transform: [{ rotateZ: "180deg" }],
    // backgroundColor: "purple"
  },
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
    bottom: 10,
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
    bottom: 65,
  },
  plusSignPlayerThree: {
    flexDirection: "row",
    alignSelf: "flex-end",
    position: "absolute",
    color: "white",
    fontSize: 50,
    right: 60,
    bottom: 165,
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
    bottom: 43,
  },
  minusSignPlayerThree: {
    flexDirection: "row",
    position: "absolute",
    color: "white",
    fontSize: 90,
    left: 60,
    bottom: 143,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
  },
  lifeTotal: {
    flex: 0.6,
    alignSelf: "center",
    position: "absolute",
    width: 192,
    height: 120,
    color: "white",
    fontSize: 100,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "black",
  },
  text: {
    position: "absolute",
    top: 5,
    width: 125,
    height: 60,
    color: "white",
    fontSize: 24,
    textAlign: "center",
    // backgroundColor: "grey",
  },
  textPlayerThree: {
    position: "absolute",
    top: 95,
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

export default threeLifeTotal;
