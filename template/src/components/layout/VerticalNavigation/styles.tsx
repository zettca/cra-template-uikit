import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  container: {
    position: "absolute",
    zIndex: 1100,
  },
  root: {
    width: 300,
    marginTop: 44,
    height: "calc(100vh - 44px)",
  },
}));

export default styles;
