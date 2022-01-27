import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #C6ECED;
    --yellow: #FFCB05;
    --green: #48D0B0;
    --dark-blue: #3763AD;
    --black: #000000;
    --white: #FFFFFF;
    --text-title: #363F5F;
    --text-body: #969CB3;
  }

  body, input, textarea, button {
    font-family: "Roboto";
    font-weight: 400;
  }
`