import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Startpage from "./Components/Startpage";
import { Page2 } from "./Components/Page2";
import { UserContext } from "./Components/UserContext";
// import { BrowserRouter as Router, Route, Link } from "react-router-native";

export default function App() {
  const [value, setValue] = useState("Stranger");
  return (
    // <Router>
    //   <Link to="/">Startpage</Link>
    //   <Link to="/Page2">Page2</Link>
    <View style={styles.container}>
      <UserContext.Provider value={{ value, setValue }}>
        <Startpage />
        <Page2 />
        <StatusBar style="auto" />
        {/* <Route path="/" exact component={Startpage} />
        <Route path="/" exact component={Page2} /> */}
      </UserContext.Provider>
    </View>
    // </Router>
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
