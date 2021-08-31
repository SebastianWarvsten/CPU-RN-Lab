import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function Startpage() {
  const [value, setValue] = useState("");
  function textChanged(props) {
    setValue(props);
    console.log("Texten har ändrats och är nu " + props);
  }

  return (
    <View style={styles.container}>
      <Text>Enter your name!</Text>
      <TextInput
        placeholder="Insert some text"
        onChangeText={(text) => textChanged(text)}
      />
      <Text>Välkommen {value}!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
