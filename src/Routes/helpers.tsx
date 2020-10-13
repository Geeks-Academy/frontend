import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

interface LocationState {
  from: {
    pathname: string;
  };
}

export const fakeAuth = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  authenticate(cb: () => void): void {
    localStorage.setItem('isAuthenticated', 'true');
    this.isAuthenticated = true;
    setTimeout(cb, 1000);
  },
};

export const LoginPage = (): JSX.Element => {
  const history = useHistory();
  const location = useLocation<LocationState>();
  // remember to do this at login page. If you click the back button at this point you don't go back to login page
  const { from } = location.state || { from: { pathname: '/' } };
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
