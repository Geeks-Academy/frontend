
import * as React from 'react';
import { Redirect, Route, RouteProps, useLocation } from 'react-router';
import PropTypes from 'prop-types';

export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  authenticationPath: string;
  redirectPathOnAuthentication: string;
  setRedirectPathOnAuthentication: (path: string) => void;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({redirectPathOnAuthentication, isAuthenticated, setRedirectPathOnAuthentication, authenticationPath, ...props}) => {
  const currentLocation = useLocation();
  
  let redirectPath = redirectPathOnAuthentication;
  if (!isAuthenticated) {
    setRedirectPathOnAuthentication(currentLocation.pathname);
    redirectPath = authenticationPath;
  }

  if (redirectPath !== currentLocation.pathname) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    return <Route {...props} />;
  }
};

export default ProtectedRoute;
