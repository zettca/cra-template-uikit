import React from "react";
import clsx from "clsx";
import { HvTypography } from "@hv/uikit-react-core";
import { MessageProps } from "./index";

const Message: React.FC<MessageProps> = ({
  classes,
  message,
  status,
}: MessageProps) => (
  <div className={clsx(classes.root, classes[status])}>
    <HvTypography variant="normalText">{message[status]}</HvTypography>
  </div>
);

export default Message;
