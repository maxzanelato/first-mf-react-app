import React, { useContext, useEffect } from 'react';
import { Paper } from '@material-ui/core';

import LoginContainer from '../../styles/LoginContainer';
import Logo from '../../components/Logo';
import LoginForm from '../../components/LoginForm';
import { useAuth } from '../../hooks/auth';

const Login = ({ redirectWhenSignIn, history }) => {
  const { authenticated } = useAuth();

  useEffect(() => {
    if (authenticated) history.push(redirectWhenSignIn);
  }, [authenticated]);

  return (
    <LoginContainer>
      <Logo />

      <Paper>
        <LoginForm />
      </Paper>
    </LoginContainer>
  );
};

export default Login;
