import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from 'styles/colors';

export const Item = styled.li`
  display: flex;
  margin: 14px 0px;
  list-style-type: none;
  img {
    margin-right: 8px;
  }
  p {
    display: inline;
    color: ${colors.text.Neutral20};
    margin: 0;
  }
`;

export const StyledLink = styled(Link)`
  color: ${colors.text.Primary40};
  font-weight: 700;
  margin-left: 1px;
`;
