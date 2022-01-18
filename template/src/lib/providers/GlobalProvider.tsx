import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "lib/context/ThemeContext";
import { NavigationProvider } from "lib/context/NavigationContext";
import navigation from "lib/navigation";

const { NODE_ENV, REACT_APP_BASE_PATH } = process.env;

const basePath = NODE_ENV === "production" ? REACT_APP_BASE_PATH : "/";

type GlobalProviderProps = {
  children: React.ReactNode;
};

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => (
  <Suspense fallback>
    <Router basename={basePath}>
      <ThemeProvider>
        <NavigationProvider navigation={navigation}>
          {children}
        </NavigationProvider>
      </ThemeProvider>
    </Router>
  </Suspense>
);

export default GlobalProvider;
