import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Login from "./Login";

export type LoginProps = WithStyles<typeof styles>;

export default withStyles(styles, { name: "Login" })(Login);
