import { HvTheme, HvUiKitThemeNames } from "@hitachivantara/uikit-react-core";

// extend Material-UI's theme to use `theme.hv` object
declare module "@material-ui/core/styles/createTheme" {
  interface Theme {
    hv: HvTheme;
    hvSpacing?: SpacingOptions;
  }

  interface ThemeOptions {
    hv?: HvTheme;
  }
}

declare global {
  interface ThemeContextValue {
    theme: HvUiKitThemeNames;
    setTheme: (value: HvUiKitThemeNames) => void;
    toggleTheme: () => void;
  }
}
