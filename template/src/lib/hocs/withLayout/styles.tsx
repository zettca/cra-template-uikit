import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    paddingTop: "50px",
    display: "flex",
  },
  hasFooter: {
    minHeight: "calc(100vh - 40px)",
  },
  component: {
    flexGrow: 1,
  },
  container: {
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.hv.spacing.md,
      paddingBottom: theme.hv.spacing.md,
    },
    [theme.breakpoints.down("sm")]: {
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      /* @ts-ignore */
      paddingTop: `${theme.hv.spacing.md / 2}px`,
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      /* @ts-ignore */
      paddingBottom: `${theme.hv.spacing.md / 2}px`,
    },
  },
}));

export default useStyles;
