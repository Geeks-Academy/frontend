import Home from 'pages/Home';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from 'components/atoms/Spinner';
import { LoginPage } from 'Routes/helpers';
import PrivateRoute from 'Routes/PrivateRoute';
import ReduxTestComponent from 'redux/ReduxTestComponent/ReduxTestComponent';
import { ParentComponent as PaginationPage } from 'components/molecules/Pagination';

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
        <Route path="/reduxtest" exact>
          <ReduxTestComponent />
        </Route>
        <PrivateRoute path="/protected" exact>
          <Spinner />
        </PrivateRoute>
        <Route path="/pagination" exact>
          <PaginationPage />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
