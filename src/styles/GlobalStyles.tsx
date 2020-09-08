import { createGlobalStyle } from 'styled-components';
import typography from './typography';

const GlobalStyles = createGlobalStyle`
    * {
        ${typography.globalStyles};
    }
    *, *::before, *::after {
        box-sizing: border-box;
    }
    body{
        margin: 0;
    }
`;

export default GlobalStyles;
