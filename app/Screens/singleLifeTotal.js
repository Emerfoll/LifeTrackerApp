import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  Alert,
  Button,
  TouchableOpacity,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

const image = { uri: "https://www.enjpg.com/img/2020/4k-mobile-7.jpg" };
// const image = { uri: "https://www.enjpg.com/img/2020/4k-for-mobile-3.jpg" };

function singleLifeTotal({ navigation }) {
  const [lifeTotal, setLifeTotal] = useState(40);
  const startingLifeTotal = 40;

  const increaseLife = () => {
    let currentLifeTotal = lifeTotal + 1;
    console.log("increasing life total", lifeTotal);

    setLifeTotal(currentLifeTotal);
  };

  const decreaseLife = () => {
    let currentLifeTotal = lifeTotal - 1;
    console.log("deccreasing life total", lifeTotal);
    setLifeTotal(currentLifeTotal);
  };

  const resetGame = () => {
    console.log("reseting game");

    setLifeTotal(startingLifeTotal);
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
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.decreaseLife}
          onPress={() => decreaseLife()}
        />

        <Text style={styles.text}>Life Total:</Text>
        <Text style={styles.lifeTotal}>{lifeTotal}</Text>

        <TouchableOpacity
          style={styles.increaseLife}
          onPress={() => increaseLife()}
        />
      </View>

      <View style={styles.resetButton}>
        <View>
          <Text
            style={styles.resetButtonArea}
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
  container: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "gray",
    // alignItems: 'center',
    justifyContent: "center",
  },
  commanderButton: {
    flexDirection: "row",
    justifyContent: "center",
    top: 311,
  },
  resetButton: {
    flexDirection: "row",
    justifyContent: "center",
    bottom: 37,
  },
  resetButtonArea: {
    color: "red",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: -20,
    fontSize: 42,
    textAlign: "center",
    // backgroundColor: 'black',
  },
  increaseLife: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(0,200,0,0.25)",
  },
  decreaseLife: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(200,0,0,0.25)",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  lifeTotal: {
    flex: 0.6,
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    width: 125,
    height: 60,
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "black",
    zIndex: 1000,
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
    zIndex: 1000,
  },
  image: {
    marginBottom: 15,
  },
});

export default singleLifeTotal;
