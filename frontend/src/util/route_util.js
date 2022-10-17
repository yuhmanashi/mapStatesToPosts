import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = state => (
  {loggedIn: state.session.isAuthenticated}
);

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Redirect to="/home" />
    ) : (
      <Component {...props} />
    )
  )} />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));