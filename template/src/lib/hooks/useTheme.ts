import { useState } from "react";
import { HvUiKitThemeNames } from "@hv/uikit-react-core";

import { setCookie, getCookie } from "lib/utils/cookie";

const WICKED: HvUiKitThemeNames = "wicked";
const DAWN: HvUiKitThemeNames = "dawn";

const useTheme = (): ThemeContextValue => {
  const initialTheme = getCookie("theme") === WICKED ? WICKED : DAWN;
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    const newTheme = theme === DAWN ? WICKED : DAWN;
    setTheme(newTheme);
    setCookie({ key: "theme", value: newTheme });
  };

  return { theme, setTheme, toggleTheme };
};

export default useTheme;
