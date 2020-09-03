import styled from 'styled-components';

import device from 'styles/devices';
import typography from 'styles/typography';
import colors from 'styles/colors';

export const Title = styled.h1`
  /* margin-bottom: 32px; */
  color: ${colors.background.NeutralBlack};
  ${typography.header.bold.L}

  ${device.mobile} {
    ${typography.header.bold.S}
  }
  /* text-align: center;
  ${device.desktop} {
    text-align: left;
  } */
`;
