import React, { useContext } from "react";
import { Button, StyleSheet, View } from "react-native";
import { UserContext } from "./UserContext";

export function Page2() {
  const { value, setValue } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <h2>Hi {value}!</h2>
      <Button
        title="I want to be anonumus"
        onPress={() => setValue("Mysterious Stranger")}
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
