import React, { useMemo } from "react";
import { HvProvider } from "@hitachivantara/uikit-react-core";

import useTheme from "lib/hooks/useTheme";

export const ThemeContext = React.createContext<ThemeContextValue>({
  theme: "wicked",
  setTheme: () => undefined,
  toggleTheme: () => undefined,
});

export const ThemeProvider: React.FC = ({ children }) => {
  const { theme, setTheme, toggleTheme } = useTheme();

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [setTheme, theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <HvProvider uiKitTheme={theme}>{children}</HvProvider>
    </ThemeContext.Provider>
  );
};
