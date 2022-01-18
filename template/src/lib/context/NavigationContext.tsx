import React, { useMemo } from "react";

import useNavigation from "lib/hooks/useNavigation";

export const NavigationContext = React.createContext<NavigationContextValue>({
  navigation: [],
  activePath: undefined,
  isVerticalOpen: false,
  setVerticalOpen: () => undefined,
  toggleVerticalOpen: () => undefined,
});

export const NavigationProvider: React.FC<{
  navigation: NavigationData[];
}> = ({ children, navigation }) => {
  const { activePath, isVerticalOpen, setVerticalOpen, toggleVerticalOpen } =
    useNavigation(navigation);

  const value = useMemo(
    () => ({
      navigation,
      activePath,
      isVerticalOpen,
      toggleVerticalOpen,
      setVerticalOpen,
    }),
    [
      activePath,
      isVerticalOpen,
      navigation,
      setVerticalOpen,
      toggleVerticalOpen,
    ]
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
