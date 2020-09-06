import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from 'styles/colors';
import device from 'styles/devices';
import typography from 'styles/typography';

export const Item = styled.li`
  display: flex;
  margin-bottom: 14px;
  list-style-type: none;
  img {
    margin-right: 8px;
  }
  p {
    display: inline;
    margin: 0;
    ${typography.body.S}
    color: ${colors.text.Neutral20};

    ${device.tablet} {
      ${typography.body.L}
    }
  }
`;

export const StyledLink = styled(Link)`
  color: ${colors.text.Primary40};
  font-weight: 700;
  margin-left: 1px;
`;
