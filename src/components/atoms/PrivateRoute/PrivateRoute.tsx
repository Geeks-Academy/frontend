import { Redirect, Route, RouteProps } from 'react-router';
import React from 'react';
import { fakeAuth } from 'Routes/helpers';

const PrivateRoute = ({ children, ...rest }: RouteProps): JSX.Element => {
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={() =>
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

export default PrivateRoute;
