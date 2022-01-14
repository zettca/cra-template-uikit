import React from "react";
import { render } from "@testing-library/react";
import { withProvider } from "lib/utils/tests";
import NotFound from "./index";

describe("<NotFound />", () => {
  let snapshot;

  beforeEach(() => {
    const WithProvider = withProvider(NotFound);
    snapshot = render(<WithProvider />);
  });

  test("it matches the snapshot", () => {
    expect(snapshot.container).toMatchSnapshot();
  });
});
