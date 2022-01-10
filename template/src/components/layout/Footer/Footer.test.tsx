import React from "react";
import { render } from "@testing-library/react";
import { withProvider } from "lib/utils/tests";
import Footer from "./index";

describe("<Footer />", () => {
  let snapshot;

  beforeEach(() => {
    const WithProvider = withProvider(Footer);

    snapshot = render(<WithProvider />);
  });

  test("it matches the snapshot", () => {
    expect(snapshot.container).toMatchSnapshot();
  });
});
