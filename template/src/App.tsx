import React from "react";
import GlobalProvider from "lib/providers/GlobalProvider";
import Routes from "lib/routes";
import "lib/i18n";

const App: React.FC = () => (
  <GlobalProvider>
    <Routes />
  </GlobalProvider>
);

export default App;
