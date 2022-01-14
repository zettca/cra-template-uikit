import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Message from "./Message";

interface M {
  error?: string;
  success?: string;
}

interface BaseProps {
  message: M;
  status: string;
}

export type MessageProps = BaseProps & WithStyles<typeof styles>;

export default withStyles(styles, { name: "Message" })(Message);
