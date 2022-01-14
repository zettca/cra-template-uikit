import React from "react";
import { render } from "@testing-library/react";
import { withProvider } from "lib/utils/tests";
import VerticalNavigation from "./index";

describe("<VerticalNavigation />", () => {
  let component;

  const WithProvider = withProvider(VerticalNavigation);

  beforeEach(() => {
    component = render(<WithProvider />);
  });

  it("should be defined", () => {
    expect(component).toBeDefined();
  });

  it("renders the component", () => {
    expect(component.baseElement).toMatchSnapshot();
  });
});
