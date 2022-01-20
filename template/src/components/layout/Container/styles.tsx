import { makeStyles } from "@material-ui/core";

import { HEADER_HEIGHT } from "lib/utils/layout";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    width: "100%",
    marginTop: HEADER_HEIGHT,
  },
  container: {
    marginTop: `${theme.hv.spacing.md}px`,
  },
  hasSecondLevel: {
    [theme.breakpoints.up("md")]: {
      marginTop: `calc(${HEADER_HEIGHT}px + ${theme.hv.spacing.md}px)`,
    },
  },
  fullHeight: {
    marginTop: 0,
    padding: 0,
    height: `calc(100vh - ${HEADER_HEIGHT}px - 40px)`,
    [theme.breakpoints.down("sm")]: {
      height: `calc(100vh - ${HEADER_HEIGHT}px - 92px)`,
    },
  },
}));

export default useStyles;
