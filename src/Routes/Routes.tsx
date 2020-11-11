import Spinner from 'components/atoms/Spinner';
import Home from 'pages/Home';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReduxTestComponent from 'redux/ReduxTestComponent/ReduxTestComponent';
import { LoginPage } from 'Routes/helpers';
import PrivateRoute from 'Routes/PrivateRoute';
import MultiStepExample from '../pages/Home/MultiStepExample/MultiStepExample';

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
        <Route path="/public" exact />
        <Route path="/reduxtest" exact>
          <ReduxTestComponent />
        </Route>
        <Route path="/multistepexample" exact>
          <MultiStepExample />
        </Route>
        <PrivateRoute path="/protected" exact>
          <Spinner />
        </PrivateRoute>
      </Switch>
    </>
  );
};

export default Routes;
