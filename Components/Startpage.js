import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState, useContext } from "react";
import { UserContext } from "./UserContext";

export default function Startpage() {
  const { value, setValue } = useContext(UserContext);

  function textChanged(props) {
    setValue(props);
    console.log("Texten har ändrats och är nu " + props);
  }

  //Funktion som har en image som knapp som returnerar ett random namn från en lista

  //En dropdownlist med namn från en array där det går att välja namn

  //En infosida där det går att läsa massa loremipsum info med en ScrollView

  //Det här var en testsida för att försöka få igång useCOntext och route

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
