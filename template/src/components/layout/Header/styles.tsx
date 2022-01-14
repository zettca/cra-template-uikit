import { createStyles } from "@material-ui/core";

const styles = () =>
  createStyles({
    brand: {
      cursor: "pointer",
      position: "static",
      "& > p": {
        fontSize: 16,
      },
    },
  });

export default styles;
