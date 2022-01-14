import React from "react";
import { render } from "@testing-library/react";
import { withProvider } from "lib/utils/tests";
import Header from "./index";

describe("<Header />", () => {
  let component;

  beforeAll(() => {
    window.history.replaceState({ query: "google" }, "MOCK");
  });

  const WithProvider = withProvider(Header);

  beforeEach(() => {
    component = render(<WithProvider />);
  });

  it("renders the component", () => {
    expect(component.baseElement).toMatchSnapshot();
  });
});
