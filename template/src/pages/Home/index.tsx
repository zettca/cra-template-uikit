import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Home from "./Home";

export type HomeProps = WithStyles<typeof styles>;

export default withStyles(styles, { name: "Home" })(Home);
