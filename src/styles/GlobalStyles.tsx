import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
    }
    body{
        margin: 0;
    }
    
    
    h1{
      font-size: 50px;
    }
    
    button {
      height: 80px;
      width: 200px;
    }
`;

export default GlobalStyles;