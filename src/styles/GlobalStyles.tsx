import { createGlobalStyle } from 'styled-components';
import typography from './typography';

const GlobalStyles = createGlobalStyle`
body {
    ${typography.globalStyles}
}`;

export default GlobalStyles;
