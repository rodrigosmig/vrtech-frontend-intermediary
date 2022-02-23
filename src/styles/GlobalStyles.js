import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #C6ECED;
    --yellow: #FFCB05;
    --green: #48D0B0;
    --gray: #C4C4C4;
    --dark-blue: #3763AD;
    --blue: #027FC5;
    --black: #000000;
    --white: #FFFFFF;
    --purple: #3763AD
  }

  body {
    background-color: var(--background);
  }

  body, input, textarea, button {
    font-family: "Roboto";
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`