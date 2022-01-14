import { createStyles } from "@material-ui/core";

const styles = () =>
  createStyles({
    root: {
      height: "calc(100vh - 90px)",
      "& > div": {
        margin: 0,
      },
    },
  });

export default styles;
