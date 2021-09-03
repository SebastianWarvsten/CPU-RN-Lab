import "react-native";
import React from "react";
import App from "./App";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";
import { Greeting } from "./Components/Greeting";
import { Currency } from "./Components/Currency";

//Test 1: Kolla om App renderas och om det finns ett textelement som det står abc i
it("renders correctly", () => {
  renderer.create(<App />);
});

const { getByText } = render(<Currency />);
const element = getByText("Exchange for");

//Test 2: Kolla om utskrift blir som förväntat efter knapptryck
it("have right text", () => {
  const { getByTestId, getByText } = render(<Greeting />);
  expect(getByTestId("greeting").props.children).toBe("");

  const button = getByText("Säg hej!");
  fireEvent.press(button);

  expect(getByTestId("greeting").props.children).toBe("Tjenare");
});
