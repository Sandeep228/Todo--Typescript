import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../src/core/store";
import App from "./App";
import InputField from "./components/InputField/InputField";

test("renders learn react link", () => {
  const { getByText } = render(<App />);

  expect(getByText(/todo-app/i)).toBeInTheDocument();
});
