import React from "react";
import { HvProvider } from "@hv/uikit-react-core";
import { AuthContext } from "lib/contexts/AuthContext";
import ThemeContext from "lib/contexts/ThemeContext";
import { useAuth } from "lib/hooks/useAuth";
import useTheme from "lib/hooks/useTheme";
import { setupAxios } from "lib/utils/http";
import UserContext from "lib/contexts/UserContext";
import useUser from "lib/hooks/useUser";

const GlobalProvider = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthed, authStatus, login, logout, authMessage } = useAuth();
  const { isAdmin, roles } = useUser(isAuthed);

  // Configure axios
  setupAxios(logout);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AuthContext.Provider
        value={{
          isAuthed,
          authStatus,
          authMessage,
          login,
          logout,
        }}
      >
        <HvProvider uiKitTheme={theme}>
          <UserContext.Provider value={{ isAdmin, roles }}>
            {children}
          </UserContext.Provider>
        </HvProvider>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default GlobalProvider;
