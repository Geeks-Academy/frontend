import Home from 'pages/Home';
import React from 'react';
import { Redirect, Route, RouteProps, Switch } from 'react-router-dom';
import Spinner from 'components/atoms/Spinner';
import { LoginPage, fakeAuth } from './helpers';

const PrivateRoute = ({ children, ...rest }: RouteProps): JSX.Element => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const Routes = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/public" exact>
          <Spinner />
        </Route>
        <PrivateRoute path="/protected" exact>
          <Spinner />
        </PrivateRoute>
      </Switch>
    </>
  );
};

export default Routes;
