import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AuthProvider } from 'auth/auth';
import { PokemonProvider } from 'data/pokemon';

import Router from './router/Router';

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
