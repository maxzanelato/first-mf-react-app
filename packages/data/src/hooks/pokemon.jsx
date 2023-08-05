import React, { createContext, useCallback, useState, useContext } from 'react';

import { getCards } from '../api/pokemon.api';

const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetch = useCallback(async ({ query }) => {
    setLoading(true);

    try {
      const cards = await getCards({ query });

      setLoading(false);
      setPokemons(cards);

      return cards;
    } catch (e) {
      setLoading(false);
      throw new Error(e);
    }
  }, []);

  return (
    <PokemonContext.Provider value={{ loading, pokemons, fetch }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error('usePokemon must be used within an PokemonProvider');
  }

  return context;
};
