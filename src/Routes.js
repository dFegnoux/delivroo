import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Menus from "./containers/Menus";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";

const Routes = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/" exact component={Menus} />
        <Route component={NoMatch} />
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
