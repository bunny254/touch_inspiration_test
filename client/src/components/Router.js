import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Person from "./Person";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/users:id " component={Person} />
    </Switch>
  </BrowserRouter>
);

export default Router;
