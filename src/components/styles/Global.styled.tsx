import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Outfit', sans-serif;
  }
  p{
    opacity: 0.6;
  }
  img{
    width: 100%;
  }

`;
export default GlobalStyles;
