import React, { useState } from "react";
import Startpage from "./Components/Startpage";
import { Page2 } from "./Components/Page2";
import { OvningsTest } from "./Components/OvningsTest";
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
          <Stack.Screen name="Page2" component={Page2} />
          <Stack.Screen name="OvningsTest" component={OvningsTest} />
        </Stack.Navigator>
      </UserContext.Provider>
    </NavigationContainer>
  );
}
