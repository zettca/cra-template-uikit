import React, { useContext } from "react";
import { HvLogin } from "@hv/uikit-react-core";
import { useTranslation } from "react-i18next";
import withLayout from "lib/hocs/withLayout";
import { LoginForm, RecoverForm } from "components/login";
import { AuthContext, RecoverContext } from "lib/contexts/AuthContext";
import { useRecover } from "lib/hooks/useAuth";
import { setTitle } from "lib/utils/setTitle";
import { LoginProps } from "./index";

const Login: React.FC<LoginProps> = () => {
  const { login, authStatus, authMessage } = useContext(AuthContext);
  const { recoverStatus, activeForm, setActiveForm, recover } = useRecover();
  const showRecover = activeForm === "recover";

  const { t } = useTranslation();

  setTitle(
    `${
      showRecover
        ? t("pages.login.recoverForm.title")
        : t("pages.login.loginForm.title")
    } - ${t("components.layout.header.appName")}`
  );

  return (
    <RecoverContext.Provider
      value={{
        recoverStatus,
        activeForm,
        setActiveForm,
        recover,
      }}
    >
      <HvLogin>
        {showRecover ? (
          <RecoverForm
            status={recoverStatus}
            onSubmit={async (email) => recover(email)}
            onCancel={() => setActiveForm("login")}
          />
        ) : (
          <LoginForm
            status={authStatus}
            message={authMessage}
            onSubmit={async (credentials) => login(credentials)}
            onForgot={() => setActiveForm("recover")}
          />
        )}
      </HvLogin>
    </RecoverContext.Provider>
  );
};

export default withLayout(Login, true);
