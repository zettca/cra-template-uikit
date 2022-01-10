import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import NotFound from "./NotFound";

export type NotFoundProps = WithStyles<typeof styles>;

export default withStyles(styles, { name: "NotFound" })(NotFound);
