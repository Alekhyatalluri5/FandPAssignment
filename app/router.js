import React, { Fragment } from "react";
import { ConnectedRouter } from "react-router-redux";
import { Switch, Route } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";

import Cakes from "./pages/Masters/Cakes";




function RouterConfig({ history }) {
  return (
    <Fragment>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={BasicLayout} />
          <Route path="/cakes" component={Cakes} />

          
        </Switch>
      </ConnectedRouter>
    </Fragment>
  );
}

export default RouterConfig;
