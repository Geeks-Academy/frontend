import { Redirect, Route, RouteProps } from 'react-router';
import React from 'react';
import { fakeAuth } from 'Routes/helpers';

const PrivateRoute = ({ children, ...rest }: RouteProps): JSX.Element => {
  return (
    <Route
      {...rest}
      render={() => (fakeAuth.isAuthenticated ? children : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
