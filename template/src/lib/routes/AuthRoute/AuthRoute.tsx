import React, { useContext } from "react";
import { RouteProps } from "react-router";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "lib/contexts/AuthContext";
import UserContext from "lib/contexts/UserContext";

interface AuthProps extends RouteProps {
  redirect?: string;
}

const AuthRoute: React.FC<AuthProps> = ({
  path,
  exact,
  redirect,
  component,
}: AuthProps) => {
  const { isAuthed } = useContext(AuthContext);
  const { isAdmin } = useContext(UserContext);

  const isLogin = path === "/login";
  const route = <Route path={path} exact={exact} component={component} />;

  if (redirect) return <Redirect to={redirect} />;

  if (!isAuthed) {
    if (isAuthed === null || isAuthed === undefined) return null;
    return isLogin ? route : <Redirect to="/login" />;
  }

  const isNewLicense = path === "/new-license";

  if (!isAdmin && isNewLicense) {
    return <Redirect to="/license" />;
  }

  return isLogin ? <Redirect to="/" /> : route;
};

export default AuthRoute;
