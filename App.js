import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Navigator from "./routes/homeStack";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "gray",
    justifyContent: "center",
  },
});
