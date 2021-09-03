import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { useState, useContext } from "react";
import { UserContext } from "./UserContext";

export default function Startpage({ navigation }) {
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
      <Text>Välkommen {value}!</Text>
      <TextInput
        placeholder="Enter your name:"
        onChangeText={(text) => textChanged(text)}
      />
      {/* Om "Enter your name:"- rutan är tom ska knappens title vara Procede anonumusly */}
      {/* För det krävs en conditional variabel man sätter till texten om rutan är tom */}
      {/* Contituinal variabeln ska vara (om text finns i rutan) ? {value} : Stranger */}
      <Button title="To Page2" onPress={() => navigation.push("Page2")} />
      <Button
        title="To OvningsTest"
        onPress={() => navigation.push("OvningsTest")}
      />
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
