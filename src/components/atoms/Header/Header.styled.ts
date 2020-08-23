import styled from 'styled-components';
import typography from 'styles/typography';
import device from 'styles/devices';

export const Title = styled.h1`
  color: #000000;
  ${typography.header.bold.L}

  ${device.mobile} {
    ${typography.header.bold.S}
  }
`;