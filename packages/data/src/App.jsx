import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Router from './router/Router';
import { AuthProvider } from 'auth/auth';
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
