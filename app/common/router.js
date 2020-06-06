/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Fragment } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
// import NotFoundPage from 'pages/NotFoundPage';
// import exception from './pages/Exception/500';
import BasicLayout from './layouts/BasicLayout';

import Cakes from '../pages/Masters/Cakes'









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