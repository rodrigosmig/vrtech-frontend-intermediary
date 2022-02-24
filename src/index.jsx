import React from 'react';
import ReactDOM from 'react-dom';
import { PokemonProvider } from './contexts/Pokemons';
import Router from './routes';
import { GlobalStyle } from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <PokemonProvider>
      <Router />
      <GlobalStyle />
    </PokemonProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
