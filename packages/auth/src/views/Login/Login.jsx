import { Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../components/Logo';
import { useAuth } from '../../hooks/auth';
import LoginForm from '../../components/LoginForm';
import LoginContainer from '../../styles/LoginContainer';

const Login = ({ redirectTo }) => {
  let navigate = useNavigate();
  const { authenticated } = useAuth();

  let from = redirectTo;

  useEffect(() => {
    if (authenticated) {
      navigate(from, { replace: true });
    }
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
