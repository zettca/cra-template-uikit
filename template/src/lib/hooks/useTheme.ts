import { useState, useEffect } from "react";
import { useMediaQuery } from "@material-ui/core";
import { HvUiKitThemeNames } from "@hitachivantara/uikit-react-core";

import { setCookie, getCookie } from "lib/utils/cookie";

const WICKED: HvUiKitThemeNames = "wicked";
const DAWN: HvUiKitThemeNames = "dawn";

const useTheme = (): ThemeContextValue => {
  const initialTheme = getCookie("theme") === WICKED ? WICKED : DAWN;
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState<HvUiKitThemeNames>(initialTheme);

  useEffect(() => {
    setTheme(
      (getCookie("theme") as HvUiKitThemeNames) ||
        (prefersDarkMode && WICKED) ||
        DAWN
    );
  }, [prefersDarkMode]);

  const toggleTheme = () => {
    const newTheme = theme === DAWN ? WICKED : DAWN;
    setTheme(newTheme);
    setCookie({ key: "theme", value: newTheme });
  };

  return { theme, setTheme, toggleTheme };
};

export default useTheme;
