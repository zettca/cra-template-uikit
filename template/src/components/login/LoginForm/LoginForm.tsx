import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import {
  HvButton,
  HvTypography,
  HvLabel,
  HvBaseInput,
  HvCheckBox,
} from "@hv/uikit-react-core";
import { AuthCredentials } from "typings/auth";
import { LoginFormProps } from "./index";
import Message from "../Message";

const LoginForm: React.FC<LoginFormProps> = ({
  classes,
  onSubmit,
  onForgot,
  status,
  message,
}: LoginFormProps) => {
  const { t } = useTranslation();
  const [credentials, setCredentials] = useState<AuthCredentials>({
    username: "",
    password: "",
  });
  const isPending = status === "pending";
  const isError = status === "error";

  const handleChange = (value: string, key: string): void => {
    const newCredentials: AuthCredentials = {
      ...credentials,
      ...{ [key]: value },
    };
    setCredentials(newCredentials);
  };

  const errorMessage = message || t("pages.login.loginForm.error");

  return (
    <div className={classes.root}>
      <HvTypography variant="mTitle">
        {t("pages.login.loginForm.title")}
      </HvTypography>

      {isError && (
        <Message
          message={{
            error: errorMessage,
          }}
          status={status}
        />
      )}

      <HvLabel
        id="username-label"
        label={t("pages.login.loginForm.username.label")}
        classes={{ root: classes.input }}
      >
        <HvBaseInput
          id="username-input"
          placeholder={t("pages.login.loginForm.username.placeholder")}
          value={credentials.username}
          inputProps={{ autoFocus: true }}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement>,
            value: string
          ): string => {
            handleChange(value, "username");
            return value;
          }}
        />
      </HvLabel>

      <HvLabel
        id="password-label"
        label={t("pages.login.loginForm.password.label")}
        classes={{ root: classes.input }}
      >
        <HvBaseInput
          id="password-input"
          placeholder={t("pages.login.loginForm.password.placeholder")}
          value={credentials.password}
          inputProps={{
            type: "password",
          }}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement>,
            value: string
          ): string => {
            handleChange(value, "password");
            return value;
          }}
        />
      </HvLabel>

      <HvCheckBox
        classes={{
          container: classes.checkBox,
        }}
        label={t("pages.login.loginForm.remember")}
      />

      <HvButton
        type="submit"
        category="primary"
        className={clsx(classes.login, classes.sentenceCase)}
        onClick={() => onSubmit(credentials)}
        disabled={isPending}
      >
        {isPending
          ? t("pages.login.loginForm.submit.logging")
          : t("pages.login.loginForm.submit.login")}
      </HvButton>

      <HvButton
        category="ghost"
        classes={{
          root: classes.forgot,
        }}
        className={clsx(classes.sentenceCase)}
        onClick={onForgot}
        disabled={isPending}
      >
        {t("pages.login.loginForm.forgot")}
      </HvButton>
    </div>
  );
};

export default LoginForm;
