import { createGlobalStyle } from 'styled-components';
import typography from './typography';

const GlobalStyles = createGlobalStyle`
* {
    ${typography.globalStyles};
}
body{
    margin: 0;
}
`;

export default GlobalStyles;
