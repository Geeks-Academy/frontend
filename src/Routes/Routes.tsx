import Home from 'pages/Home';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from 'components/atoms/Spinner';
import { LoginPage } from 'Routes/helpers';
import PrivateRoute from 'Routes/PrivateRoute';
import MultiStepForm from 'components/molecules/MultiStepForm/MultiStepForm';
import { Step1, Step2 } from 'components/forms/ExampleForm/steps';

const handleSubmit = (state: Record<string, number | string>) => {
  console.log(state);
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
        <Route path="/multistepform" exact>
          <MultiStepForm onSubmit={handleSubmit} store="exampleForm">
            <Step1 />
            <Step2 />
          </MultiStepForm>
        </Route>
        <PrivateRoute path="/protected" exact>
          <Spinner />
        </PrivateRoute>
      </Switch>
    </>
  );
};

export default Routes;
