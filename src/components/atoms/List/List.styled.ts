import styled from 'styled-components';

import typography from 'styles/typography';
import colors from 'styles/colors';

export const StyledList = styled.ul`
  ${typography.body.L};
  color: ${colors.text.Neutral20};
  list-style: none;
`;