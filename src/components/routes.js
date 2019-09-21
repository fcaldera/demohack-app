import React from "react";
import {Route, Redirect, Switch, withRouter} from 'react-router-dom'

// components
import PrivateRoute from './privateRoute';
import Login from './login';
import Registration from './registration';
import Activation from './registration/activation';
import ActivationSuccess from './registration/activationSuccess';
import Discovery from './discovery';

function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route path="/registration/activate/:token" component={Activation} />
      <Route path="/registration/success" component={ActivationSuccess} />

      {/*<Route exact path="/initiative/:id" component={Initiative} />*/}

      <Route exact path="/" component={Discovery} />
      <Route component={Discovery} />

    </Switch>
  );
}

export default Routes;
