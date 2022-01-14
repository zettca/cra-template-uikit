import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import RecoverForm from "./RecoverForm";

export interface BaseProps {
  onSubmit: (email: string) => void;
  onCancel: () => void;
  status: string;
}

export type RecoverFormProps = BaseProps & WithStyles<typeof styles>;

export default withStyles(styles, { name: "RecoverForm" })(RecoverForm);
