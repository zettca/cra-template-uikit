import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { AuthCredentials } from "typings/auth";
import styles from "./styles";
import LoginForm from "./LoginForm";

export interface BaseProps {
  onSubmit: (credentials: AuthCredentials) => void;
  onForgot: () => void;
  status: string;
  message: string;
}

export type LoginFormProps = BaseProps & WithStyles<typeof styles>;

export default withStyles(styles, { name: "LoginForm" })(LoginForm);
