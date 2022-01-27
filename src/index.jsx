import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import { GlobalStyle } from './styles/GlobalStyles';


ReactDOM.render(
  <React.StrictMode>
    <Router />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
