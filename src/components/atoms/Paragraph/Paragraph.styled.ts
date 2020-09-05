import styled from 'styled-components';

import device from 'styles/devices';
import typography from 'styles/typography';
import colors from 'styles/colors';

export const StyledParagraph = styled.p`
  color: ${colors.background.NeutralBlack};
  ${typography.body.M}

  ${device.tablet} {
    ${typography.body.L}
  }
`;
