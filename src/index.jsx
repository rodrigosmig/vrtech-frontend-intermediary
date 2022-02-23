import React from 'react';
import ReactDOM from 'react-dom';
import { BookmarkProvider } from './contexts/Bookmarks';
import Router from './routes';
import { GlobalStyle } from './styles/GlobalStyles';


ReactDOM.render(
  <React.StrictMode>
    <BookmarkProvider>
      <Router />
      <GlobalStyle />
    </BookmarkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
