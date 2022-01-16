import React, { lazy } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

const Projects = lazy(() => import("pages/Projects"));
const Monitoring = lazy(() => import("pages/Monitoring"));
const NotFound = lazy(() => import("pages/NotFound"));

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/projects" />
    </Route>

    <Route exact path="/projects" component={Projects} />

    <Route exact path="/monitoring" component={Monitoring} />

    <Route component={NotFound} />
  </Switch>
);

export default Routes;
