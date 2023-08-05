import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { TextField } from '@material-ui/core';

import Button from './Button';
import { useAuth } from '../hooks/auth';
import FormContainer from '../styles/FormContainer';

const LoginFormSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});

const LoginForm = () => {
  const { authenticate, loading } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginFormSchema,
    onSubmit: (values) => {
      authenticate(values).catch((e) => alert(e));
    },
  });

  return (
    <FormContainer>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Senha"
          type="password"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          size={'large'}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          loading={loading}
          disabled={loading}
        >
          Entrar
        </Button>
      </form>
    </FormContainer>
  );
};

export default LoginForm;
