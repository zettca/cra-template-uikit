import { HvTheme } from "@hv/uikit-react-core";

// extend Material-UI's theme to use `theme.hv` object
declare module "@material-ui/core/styles" {
  interface Theme {
    hv: HvTheme;
  }

  interface ThemeOptions {
    hv?: HvTheme;
  }
}

declare module "*.svg";
declare module "*.png";
declare module "*.jpg";

declare module "jsonwebtoken";
