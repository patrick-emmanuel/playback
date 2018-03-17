import { injectGlobal } from "styled-components";

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    min-height: 100vh;
    font-family: 'Ubuntu', serif;
  }

  *{
    box-sizing: border-box;
  } 

  #root {
    min-height: 100vh;
  }
`;
