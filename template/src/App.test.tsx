import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("should render app title", () => {
    render(<App />);
    const element = screen.getByText(/lumada solution/i);
    expect(element).toBeInTheDocument();
  });
});
