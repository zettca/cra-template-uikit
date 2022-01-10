import { useState } from "react";
import { authenticate, recoverPassword } from "lib/api/auth";
import { setCookie, removeCookie, getCookie } from "lib/utils/cookie";
import { delay } from "lib/utils/delay";
import { AuthCredentials } from "typings/auth";

export const useAuth = () => {
  const [authStatus, setAuthStatus] = useState<string>("idle");
  const [authMessage, setAuthMessage] = useState<string>("");
  const [isAuthed, setIsAuthed] = useState<boolean>(
    Boolean(getCookie("token"))
  );

  const login = async (credentials: AuthCredentials): Promise<void> => {
    setAuthStatus("pending");

    try {
      const token: string = await authenticate(credentials);
      setCookie({ key: "token", value: token });
      setIsAuthed(true);
      setAuthStatus("success");
      await delay(2000).then(() => setAuthStatus("idle"));
    } catch (error) {
      setAuthStatus("error");
      if (error instanceof Error) {
        setAuthMessage(error.message);
      }
      await delay(2000).then(() => setAuthStatus("idle"));
    }
  };

  const logout = (): void => {
    removeCookie("token");
    setIsAuthed(false);
  };

  return { authStatus, authMessage, isAuthed, login, logout };
};

export const useRecover = () => {
  const [recoverStatus, setRecoverStatus] = useState<string>("idle");
  const [activeForm, setActiveForm] = useState<string>("login");

  const recover = async (email) => {
    setRecoverStatus("pending");
    try {
      await recoverPassword(email);
      setRecoverStatus("success");
      await delay(2000).then(() => {
        setRecoverStatus("idle");
        setActiveForm("login");
      });
    } catch (error) {
      setRecoverStatus("error");
      await delay(2000).then(() => setRecoverStatus("idle"));
    }
  };

  return { recoverStatus, activeForm, setActiveForm, recover };
};
