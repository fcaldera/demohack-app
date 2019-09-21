import React from "react";
import {Route, Redirect, Switch, withRouter} from 'react-router-dom'

// components
import PrivateRoute from './privateRoute';
import Login from './login';
import Registration from './registration';
import Discovery from './discovery';

function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />

      {/*<Route exact path="/initiative/:id" component={Initiative} />*/}

      <Route exact path="/" component={Discovery} />
      <Route component={Discovery} />

    </Switch>
  );
}

export default Routes;
