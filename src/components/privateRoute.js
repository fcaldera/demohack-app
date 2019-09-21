import React from 'react';
import {
    withRouter,
    Route,
    Redirect,
} from 'react-router-dom'

const PrivateRoute = ({ component: Component, authentication, location, ...rest }) => {
    const {pathname} = location;
    return (
        <Route {...rest} render={(props) => (
            (authentication && authentication.isLoggedIn === true)
                ? <Component {...props} />
                : <Redirect to={'/login/redirect/' + encodeURIComponent(pathname)} />
        )} />
    );
};

export default withRouter(PrivateRoute);
