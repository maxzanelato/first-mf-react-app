import React, { useEffect } from 'react';
import { AppBar, Box, Container, Grid } from '@material-ui/core';

import Logo from '../components/Logo';
import SearchBar from 'data/SearchBar';
import { usePokemon } from 'data/pokemon';
import CardGrid from '../components/CardGrid';

const Pokemons = () => {
  const { fetch, loading, pokemons } = usePokemon();

  useEffect(() => {
    fetch({});
  }, [fetch]);

  return (
    <div>
      <AppBar position="static">
        <Box p={1}>
          <Logo width="100px" />
        </Box>
      </AppBar>

      <Container>
        <Box mt={2}>
          <Grid container>
            <Grid item xs={12}>
              <SearchBar />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Box mt={2}>
                <CardGrid cards={pokemons} loading={loading} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Pokemons;
