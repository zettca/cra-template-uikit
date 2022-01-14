// import { useMediaQuery, useTheme } from "@material-ui/core";
import { useState } from "react";
// import { useLocation } from "react-router-dom";

const smallMargin = 44;
// const bigMargin = 84;

export const useLayoutMargins = () => {
  const [margin] = useState<number>(smallMargin);
  // -----------------------------------------------------------
  // TODO: Need to work while adding support for smaller devices
  // -----------------------------------------------------------

  // const theme = useTheme();
  // const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   if (isMdUp) {
  //     setMargin(bigMargin);
  //   } else {
  //     setMargin(smallMargin);
  //   }
  // }, [theme, isMdUp, pathname]);

  return margin;
};

export { default } from "./withLayout";
