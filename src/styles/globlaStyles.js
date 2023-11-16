import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

  }

  body, input, button {
    font: 14px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }

  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;

`;
