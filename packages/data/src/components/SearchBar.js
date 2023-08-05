import React, { useCallback, useContext } from 'react';
import DelayedField from './DelayedField';
import { usePokemon } from '../hooks/pokemon';

const SearchBar = () => {
  const { fetch } = usePokemon();

  const search = useCallback(
    ({ target }) => {
      console.log(`Target here ${target.value}`);
      fetch({ query: target.value }).catch((e) => alert(e));
    },
    [fetch],
  );

  return (
    <DelayedField
      fullWidth
      id="search-input"
      name="search-input"
      label="Pesquisar"
      variant="outlined"
      placeholder="Digite o nome do pokemon"
      onChange={search}
    />
  );
};

export default SearchBar;
