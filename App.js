import React, { useState } from "react";
import Startpage from "./Components/Startpage";
import { Anonymous } from "./Components/Anonymous";
import { Greeting } from "./Components/Greeting";
import { Currency } from "./Components/Currency";
import { UserContext } from "./Components/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  const [value, setValue] = useState("Stranger");
  return (
    <NavigationContainer>
      <UserContext.Provider value={{ value, setValue }}>
        <Stack.Navigator initialRoutName="Startpage">
          <Stack.Screen name="Startpage" component={Startpage} />
          <Stack.Screen name="Anonymous" component={Anonymous} />
          <Stack.Screen name="Greeting" component={Greeting} />
          <Stack.Screen name="Currency" component={Currency} />
        </Stack.Navigator>
      </UserContext.Provider>
    </NavigationContainer>
  );
}
