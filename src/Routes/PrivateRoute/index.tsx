import { Redirect, Route, RouteProps, useLocation } from 'react-router';
import React from 'react';
import { fakeAuth } from 'Routes/helpers';

const PrivateRoute = ({ children, ...rest }: RouteProps): JSX.Element => {
  const location = useLocation();

  return fakeAuth.isAuthenticated ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Redirect to={{ pathname: '/login', state: { from: location } }} />
  );
};

export default PrivateRoute;
