import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export function Greeting() {
  const [greeting, setGreeting] = useState("");
  return (
    <View style={styles.container}>
      <Text>abc</Text>
      <Text testID="greeting">{greeting}</Text>
      <Button title="Say hello!" onPress={() => setGreeting("Hi there!")} />
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
