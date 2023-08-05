import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

import { AUTH_STATUS } from '../enums/AUTH_STATUS';
import { isAuthenticated, isLoading, login } from '../utils/authUtils';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(AUTH_STATUS.Idle);
  const [status, setStatus] = useState(AUTH_STATUS.Idle);

  const authenticate = useCallback(async ({ email, password }) => {
    setStatus(AUTH_STATUS.Loading);

    try {
      const user = await login({ email, password });

      setCurrentUser(user);
      setStatus(AUTH_STATUS.Authenticated);

      return user;
    } catch (e) {
      setCurrentUser(null);
      setStatus(AUTH_STATUS.Fail);
      throw new Error(e);
    }
  }, []);

  useEffect(() => {
    setAuthenticated(isAuthenticated(status));
    setLoading(isLoading(status));
  }, [status]);

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        currentUser,
        loading,
        status,
        authenticate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
