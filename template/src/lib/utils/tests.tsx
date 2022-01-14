import React from "react";
import { MemoryRouter } from "react-router-dom";
import GlobalProvider from "lib/providers/GlobalProvider";

export const withProvider =
  <P extends {}>(Component: React.ComponentType<P>): React.FC<P> =>
  (props) =>
    (
      <GlobalProvider>
        <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
          <Component {...props} />
        </MemoryRouter>
      </GlobalProvider>
    );
