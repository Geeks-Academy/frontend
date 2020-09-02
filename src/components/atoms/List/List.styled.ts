import styled from 'styled-components';

import typography from 'styles/typography';
import device from 'styles/devices';

import colors from 'styles/colors';

export const StyledList = styled.ul`
  margin: 0;
  padding: 0 40px;
  ${typography.body.L};
  color: ${colors.text.Neutral20};
  list-style: none;
  ${device.tablet} {
    padding: 0 0 0 40px;
  }
  ${device.desktop} {
    padding: 0;
  }
`;
