import styled from 'styled-components';
import colors from 'styles/colors';
import typography from 'styles/typography';

export const StyledPaginationButton = styled.button<{ isCurrent?: boolean }>`
  width: 100px;
  height: 50px;
  ${typography.body.bold.L}
  border: 2px solid black;
  background-color: ${colors.background.NeutralWhite};
  background-color: ${({ isCurrent }) => isCurrent && `${colors.background.Primary40}`};
  background-color: ${({ disabled }) => disabled && `${colors.background.Neutral40}`};
  color: ${colors.background.Neutral40};
  color: ${({ isCurrent }) => isCurrent && `${colors.background.NeutralWhite}`};
  color: ${({ disabled }) => disabled && `${colors.background.Neutral80}`};
  :hover:enabled {
    background-color: burlywood;
  }
`;
