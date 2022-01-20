import { makeStyles } from "@material-ui/core";

import { HEADER_HEIGHT, SECOND_LEVEL_HEIGHT } from "lib/utils/layout";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    width: "100%",
  },
  container: {
    marginTop: HEADER_HEIGHT,
    [theme.breakpoints.down("sm")]: {
      marginTop: `calc(${HEADER_HEIGHT}px + ${theme.hv.spacing.md}px)`,
    },
  },
  hasSecondLevel: {
    [theme.breakpoints.up("md")]: {
      marginTop: `calc(${HEADER_HEIGHT}px + ${SECOND_LEVEL_HEIGHT}px + ${theme.hv.spacing.md}px)`,
    },
  },
  fullHeight: {
    marginTop: HEADER_HEIGHT,
    height: `calc(100vh - ${HEADER_HEIGHT}px - 40px)`,
    [theme.breakpoints.down("sm")]: {
      height: `calc(100vh - ${HEADER_HEIGHT}px - 92px)`,
    },
    padding: 0,
  },
}));

export default useStyles;
