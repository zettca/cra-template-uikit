import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Header from "./Header";

export type HeaderProps = WithStyles<typeof styles>;

export default withStyles(styles, { name: "Header" })(Header);
