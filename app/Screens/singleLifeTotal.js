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

// Used for the background image
const image = { uri: "https://www.enjpg.com/img/2020/4k-mobile-7.jpg" };

{
  /* --------------------------- Sets the starting Life Total --------------------------- */
}
function singleLifeTotal({ navigation }) {
  const startingLifeTotal = 40;
  const [playerOneLifeTotal, setPlayerOneLifeTotal] =
    useState(startingLifeTotal);
  {
    /* --------------------------- Increase Life Total Function --------------------------- */
  }
  const increaseLife = () => {
    let currentLifeTotal = playerOneLifeTotal + 1;
    setPlayerOneLifeTotal(currentLifeTotal);
  };
  {
    /* --------------------------- End of Increase Life Total Function --------------------------- */
  }
  {
    /* --------------------------- Decrease Life Total Function --------------------------- */
  }
  const decreaseLife = () => {
    let currentLifeTotal = playerOneLifeTotal - 1;
    setPlayerOneLifeTotal(currentLifeTotal);
  };
  {
    /* --------------------------- End of Decrease Life Total Function --------------------------- */
  }
  {
    /* --------------------------- Reset Life Total Function --------------------------- */
  }
  const resetGame = () => {
    console.log("resetting game");
    setPlayerOneLifeTotal(startingLifeTotal);
  };
  {
    /* --------------------------- End of Reset Life Total Function --------------------------- */
  }

  return (
    <ImageBackground source={image} style={styles.background}>
      <View style={styles.container}>
        {/* --------------------------- Clickable Decrease Life Total Section --------------------------- */}
        <TouchableOpacity
          style={styles.decreaseLife}
          onPress={() => decreaseLife()}
        />
        {/* --------------------------- End of Clickable Decrease Life Total Section --------------------------- */}
        {/* --------------------------- Display Life Total Section --------------------------- */}

        <Text style={styles.text}>Life Total:</Text>
        <Text style={styles.lifeTotal}>{playerOneLifeTotal}</Text>
        {/* --------------------------- End of Display Life Total Section --------------------------- */}

        {/* --------------------------- Clickable Increase Life Total Section --------------------------- */}
        <TouchableOpacity
          style={styles.increaseLife}
          onPress={() => increaseLife()}
        />
      </View>
      {/* --------------------------- End of Clickable Increase Life Total Section --------------------------- */}

      {/* --------------------------- Reset Life Total Section --------------------------- */}
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
        {/* --------------------------- End of Reset Life Total Section --------------------------- */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  commanderButton: {
    flexDirection: "row",
    justifyContent: "center",
    top: 311,
  },
  increaseLife: {
    flex: 1,
    flexDirection: "row",
    zIndex: 10,
    // backgroundColor: "rgba(0,200,0,0.25)",
  },
  decreaseLife: {
    flex: 1,
    flexDirection: "row",
    zIndex: 10,
    // backgroundColor: "rgba(200,0,0,0.25)",
  },
  lifeTotal: {
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
  },
  text: {
    // flex: 0.4,
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    top: 255,
    width: 125,
    height: 60,
    color: "white",
    fontSize: 24,
    textAlign: "center",
    // backgroundColor: "grey",
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
    // backgroundColor: 'black',
  },
});

export default singleLifeTotal;
