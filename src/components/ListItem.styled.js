import styled from 'styled-components';
import { Link } from 'react-router-dom';
import typography from '../styles/typography';
import colors from '../styles/colors';

export const List = styled.ul`
  ${typography.body.L};
  color: ${colors.text.Neutral20};
  list-style: none;
`;

export const ListItems = styled.li`
  margin: 8px 0px;
`;

export const IconList = styled.img`
  margin-right: 10px;
`;

export const StyledLink = styled(Link)`
  color: ${colors.text.Primary40};
  font-weight: 700;
`;
