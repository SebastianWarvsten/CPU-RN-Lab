import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Startpage({ navigation }) {
  const { value, setValue } = useContext(UserContext);

  function textChanged(props) {
    setValue(props);
    console.log("Texten har ändrats och är nu " + props);
  }

  return (
    <View style={styles.container}>
      <Text>Welcome {value}!</Text>
      <TextInput
        placeholder="Enter your name:"
        onChangeText={(text) => textChanged(text)}
      />
      <Button title="Anonymous" onPress={() => navigation.push("Anonymous")} />
      <Button title="Greeting" onPress={() => navigation.push("Greeting")} />
      <Button
        title="Currency converter"
        onPress={() => navigation.push("Currency")}
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
