import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    background: #90FCF9;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    display: flex;
    justify-content: center;
    height: 100%;
  }
`;

export default GlobalStyle;
