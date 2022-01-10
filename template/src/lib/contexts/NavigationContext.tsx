import React from "react";

const NavigationContext = React.createContext({
  isOpen: false, // VerticalNavigation
  toggleOpen: () => {},
});

export default NavigationContext;
