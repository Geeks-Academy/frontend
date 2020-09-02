import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from 'styles/colors';

export const Item = styled.li`
  margin: 14px 0px;
  display: flex;

  img {
    margin-right: 10px;
  }
  p {
    margin: 0;
  }
`;

export const StyledLink = styled(Link)`
  color: ${colors.text.Primary40};
  font-weight: 700;
  margin-left: 1px;
`;
