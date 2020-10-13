import Home from 'pages/Home';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from 'components/atoms/Spinner';
import { LoginPage } from 'routes/helpers';
import PrivateRoute from 'routes/PrivateRoute';

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
