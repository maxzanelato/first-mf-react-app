import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthProvider from 'auth/AuthProvider';

import Router from './router/Router';
import { PokemonProvider } from './hooks/pokemon';

function App() {
  return (
    <>
      <CssBaseline />
      <AuthProvider>
        <PokemonProvider>
          <Router />
        </PokemonProvider>
      </AuthProvider>
    </>
  );
}

export default App;
