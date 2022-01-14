import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Footer from "./Footer";

export type FooterStyles = WithStyles<typeof styles>;

export default withStyles(styles, { name: "Footer" })(Footer);
