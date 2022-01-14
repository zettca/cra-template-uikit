import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  HvButton,
  HvTypography,
  HvLabel,
  HvBaseInput,
} from "@hv/uikit-react-core";
import Message from "../Message";
import { RecoverFormProps } from "./index";

const RecoverForm: React.FC<RecoverFormProps> = ({
  classes,
  onSubmit,
  onCancel,
  status,
}: RecoverFormProps) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const isPending = status === "pending";
  const isSuccess = status === "success";
  const isError = status === "error";

  return (
    <div className={classes.root}>
      <HvTypography variant="mTitle">
        {t("pages.login.recoverForm.title")}
      </HvTypography>

      {(isError || isSuccess) && (
        <Message
          message={{
            error: t("pages.login.recoverForm.error"),
            success: t("pages.login.recoverForm.success"),
          }}
          status={status}
        />
      )}

      <HvTypography variant="normalText">
        {t("pages.login.recoverForm.subtitle")}
      </HvTypography>

      <HvLabel
        id="email-label"
        label={t("pages.login.recoverForm.email.label")}
      >
        <HvBaseInput
          id="email-input"
          placeholder={t("pages.login.recoverForm.email.placeholder")}
          value={email}
          inputProps={{ autoFocus: true }}
          onChange={(
            evt: React.ChangeEvent<HTMLInputElement>,
            value: string
          ): string => {
            setEmail(evt.target.value);
            return value;
          }}
        />
      </HvLabel>

      <HvButton
        type="submit"
        category="ghost"
        className={classes.cancel}
        onClick={onCancel}
      >
        {t("pages.login.recoverForm.cancel")}
      </HvButton>

      <HvButton
        type="submit"
        category="primary"
        className={classes.recover}
        onClick={() => onSubmit(email)}
        disabled={isPending}
      >
        {isPending
          ? t("pages.login.recoverForm.submit.recovering")
          : t("pages.login.recoverForm.submit.recover")}
      </HvButton>
    </div>
  );
};

export default RecoverForm;
