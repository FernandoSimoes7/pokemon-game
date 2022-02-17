import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;

    font-family: 'Font Name', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;;
  }

  html, body, #root {
    height: 100%;
  }
  
  a {
    text-decoration: none;
  }
  .DontShowIt {
    display: none !important;
  }
  
  :root {
    --THEME_COLOR_001: #3367D6;
    --THEME_COLOR_002: #404040;
    --THEME_COLOR_003: #113E9E;

    --navbar-border: var(--THEME_COLOR_002);
  }
`;
