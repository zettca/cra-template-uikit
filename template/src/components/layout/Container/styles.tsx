import { makeStyles } from "@material-ui/core";

const HEADER_HEIGHT = 44;

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    width: "100%",
    "&$fullHeight": {
      height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    },
  },
  container: {
    position: "absolute",
    paddingBottom: theme.hv.spacing.lg,

    top: `calc(${HEADER_HEIGHT}px + ${theme.hvSpacing(2)})`,
    [theme.breakpoints.up("md")]: {
      top: `calc(${HEADER_HEIGHT}px + ${theme.hvSpacing(4)})`,
    },
  },
  fullHeight: {},
}));

export default useStyles;
