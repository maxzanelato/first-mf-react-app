import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

const PrivateRoute = ({ children, component, ...rest }) => {
  const { authenticated } = useAuth();

  const render = () => {
    return authenticated ? (
      <Route {...rest} component={component}>
        {children}
      </Route>
    ) : (
      <Redirect to="/login" />
    );
  };

  return render();
};

export default PrivateRoute;
