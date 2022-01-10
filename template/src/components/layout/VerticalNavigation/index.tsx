import { withStyles } from "@material-ui/core";
import styles from "./styles";
import VerticalNavigation from "./VerticalNavigation";

export default withStyles(styles, { name: "VerticalNavigation" })(
  VerticalNavigation
);
