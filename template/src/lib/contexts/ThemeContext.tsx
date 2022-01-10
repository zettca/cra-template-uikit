import React from "react";

const ThemeContext = React.createContext({
  theme: "wicked",
  toggleTheme: () => {},
});

export default ThemeContext;
