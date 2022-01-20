import React from "react";
import { render, screen } from "@testing-library/react";

import GlobalProvider from "lib/providers/GlobalProvider";
import Projects from "../Projects";

const renderWithProvider = () =>
  render(
    <GlobalProvider>
      <Projects />
    </GlobalProvider>
  );

describe("Projects", () => {
  test("should match the snapshot", () => {
    const { container } = renderWithProvider();
    expect(container).toMatchSnapshot();
  });

  test("should render page title", () => {
    renderWithProvider();
    const pageTitle = screen.getByText(/page.title/i);
    expect(pageTitle).toBeInTheDocument();
  });
});
