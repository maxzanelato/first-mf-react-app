import React from 'react';

import PrivateRoute from './PrivateRoute';

const routes = (redirectTo = '/authenticated') => {
  return [
    {
      path: '/login',
      async lazy() {
        let { default: Login } = await import("../views/Login");
        return { element: (
          <Login redirectTo={redirectTo} />
        ) };
      }
    },
    {
      path: '/authenticated',
      async lazy() {
        let { default: Authenticated } = await import("../views/Authenticated");
        return { element: (
          <PrivateRoute>
            <Authenticated />
          </PrivateRoute>
        ) };
      }
    },
    {
      path: '*',
      async lazy() {
        let { default: Login } = await import("../views/Login");
        return { element: (
          <Login redirectTo={redirectTo} />
        ) };
      }
    },
  ];
};

export default routes;
