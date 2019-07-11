import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }
  
  body {
    /*font-family: 'Open Sans Condensed', sans-serif;*/
    font-family: 'Lato', sans-serif;
    width: 100%;
    height: 100%;
    padding: 20px 60px;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
`
