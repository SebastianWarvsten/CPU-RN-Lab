import "react-native";
import React from "react";
import App from "./App";
import OvningsTest from "./Components/OvningsTest";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";

//Test 1: Kolla om App renderas och om det finns ett textelement som det står abc i
it("renders correctly", () => {
  renderer.create(<App />);
});

const { getByText } = render(<App />);
const element = getByText("abc");

//Test 2: Kolla om en knapp blir tryckt på och att utskriften blir som förväntat
it("have right text", () => {
  const { getByTestId, getByText } = render(<OvningsTest />);
  expect(getByTestId("greeting").props.children).toBe("");

  const button = getByText("Säg hej!");
  fireEvent.press(button);

  expect(getByTestId("greeting").props.children).toBe("Tjenare");
});

//Test 3: Debugga testkoden
