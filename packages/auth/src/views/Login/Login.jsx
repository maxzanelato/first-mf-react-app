import React, { useEffect } from 'react';
import { Paper } from '@material-ui/core';

import Logo from '../../components/Logo';
import { useAuth } from '../../hooks/auth';
import LoginForm from '../../components/LoginForm';
import LoginContainer from '../../styles/LoginContainer';

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
