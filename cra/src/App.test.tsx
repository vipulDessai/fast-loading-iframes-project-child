import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./Donut";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/This is a child app/i);
  expect(linkElement).toBeInTheDocument();
});
