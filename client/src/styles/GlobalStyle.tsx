import { createGlobalStyle } from "styled-components";
import { resetStyle } from "./reset";

export const GlobalStyle = createGlobalStyle`
  ${resetStyle}

  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
  * {
    font-family:
      'Roboto',
      '-apple-system' !important;
  }  
  
  :root {
    --color-main:#2F2E33;
    --color-red: #f34549;
  }
`;
