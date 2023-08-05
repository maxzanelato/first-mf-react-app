import { AUTH_STATUS } from '../enums/AUTH_STATUS';

export const login = ({ email, password }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'username@gmail.com' && password === 'password') {
        return resolve({ email, name: 'Max' });
      }

      reject('Email ou senha incorretos.');
    }, 1000);
  });

export const isAuthenticated = (status) => status === AUTH_STATUS.Authenticated;
export const isLoading = (status) => status === AUTH_STATUS.Loading;
