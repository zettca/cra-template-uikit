import React, { lazy, Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { HvLoading } from "@hv/uikit-react-core";
import NotFound from "pages/NotFound";
import history from "lib/utils/history";
import AuthRoute from "./AuthRoute";

const Login = lazy(() => import("pages/Login"));
const Home = lazy(() => import("pages/Home"));

const Routes = () => (
  <Suspense fallback={<HvLoading style={{ marginTop: 200 }} />}>
    <Router history={history}>
      <Switch>
        <AuthRoute path="/" exact component={Home} />
        <AuthRoute path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Suspense>
);

export default Routes;
