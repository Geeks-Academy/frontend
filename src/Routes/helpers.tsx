import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb: () => void): void {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 1000);
  },
};

export const LoginPage = (): JSX.Element => {
  const history = useHistory();
  const location = useLocation();
  // remember to do this at login page. If you click the back button at this point you don't go back to login page because
  // you are looged in
  const { from }: any = location.state || { from: { pathname: '/' } };
  const login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view this page</p>
      <button type="button" onClick={login}>
        Log in
      </button>
    </div>
  );
};
