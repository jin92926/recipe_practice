import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import variables from "./GlobalVariables";

const GlobalStyle = createGlobalStyle`
${reset}

:root {
  ${variables}
  font-family: 'Dongle', sans-serif;
}

html {
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
};

button {
    font-family : inherit;
    font-size: 1em;
}

`;

export default GlobalStyle;
