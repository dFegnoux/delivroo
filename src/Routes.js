import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MenusCtn from "./containers/MenusCtn";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";

const Routes = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/" exact component={MenusCtn} />
        <Route component={NoMatch} />
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
