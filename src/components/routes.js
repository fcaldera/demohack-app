import React from "react";
import {Route, Switch} from 'react-router-dom'

// components
// import PrivateRoute from './privateRoute';
import Login from './login';
import Registration from './registration';
import EmailActivation from './registration/emailActivation';
import EmailSuccess from './registration/emailSuccess';
import Discovery from './discovery';
import Apply from './apply';
import Initiative from './initiative';

function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route path="/registration/activate/:token" component={EmailActivation} />
      <Route path="/registration/success" component={EmailSuccess} />

      <Route exact path="/apply" component={Apply} />
      <Route exact path="/initiative/:id" component={Initiative} />

      <Route exact path="/" component={Discovery} />
      <Route component={Discovery} />

    </Switch>
  );
}

export default Routes;
