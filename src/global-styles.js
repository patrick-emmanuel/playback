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
    margin: 0px;
    padding: 0px;
    font-size: 100%;
  } 

h1{
  letter-spacing: -2px;
}
  #root {
    min-height: 100vh;
  }
`;
