import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export function Page2() {
  const { value, setValue } = useContext(UserContext);
  //Det här var en testsida för att försöka få igång useCOntext och route
  //Kan utvecklas att routa till
  return (
    <div>
      <h2>Hi {value}!</h2>
      <button onClick={() => setValue("there")}>Change vlaue</button>
    </div>
  );
}
