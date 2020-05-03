import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px
  }
  body, #root {
    font-family: sans-serif;
    height: 100%;
    width: 100%;
  }
`;
