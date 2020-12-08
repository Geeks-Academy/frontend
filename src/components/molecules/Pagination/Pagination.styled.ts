import styled from 'styled-components';
import colors from 'styles/colors';
import typography from 'styles/typography';

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 200px;
  background-color: ${colors.background.Neutral80};
  list-style: none;
`;

export const StyledButton = styled.button<{ isCurrent?: boolean }>`
  width: 140px;
  height: 60px;
  ${typography.body.bold.L}
  border: 2px solid black;
  background-color: ${colors.background.NeutralWhite};
  background-color: ${({ disabled }) => disabled && `${colors.background.Neutral40}`};
  background-color: ${({ isCurrent }) => isCurrent && `${colors.background.Primary40}`};
  color: ${colors.background.Neutral40};
  color: ${({ isCurrent }) => isCurrent && `${colors.background.NeutralWhite}`};
  color: ${({ disabled }) => disabled && `${colors.background.Neutral80}`};
  :hover:enabled {
    background-color: burlywood;
  }
`;
