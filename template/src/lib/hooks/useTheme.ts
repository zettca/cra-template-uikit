import { useState } from "react";
import { HvUiKitThemeNames } from "@hv/uikit-react-core";
import { setCookie, getCookie } from "lib/utils/cookie";

const useTheme = () => {
  const initialTheme = getCookie("theme") === "wicked" ? "wicked" : "dawn";
  const [theme, setTheme] = useState<HvUiKitThemeNames>(initialTheme);

  const toggleTheme = () => {
    const newTheme = theme === "dawn" ? "wicked" : "dawn";
    setTheme(newTheme);
    setCookie({ key: "theme", value: newTheme });
  };

  return { theme, toggleTheme };
};

export default useTheme;
