import { createGlobalStyle } from 'styled-components';
import typography from './typography';

const GlobalStyles = createGlobalStyle`
* {
    ${typography.globalStyles}
}`;

export default GlobalStyles;
