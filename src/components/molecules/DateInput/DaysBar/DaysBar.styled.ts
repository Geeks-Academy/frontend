import styled from 'styled-components';
import colors from 'styles/colors';
import typography from 'styles/typography';

export const StyledDaysBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 308px;
  height: 35px;
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 100%;
  list-style: none;
`;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 100%;
  color: ${colors.background.Neutral40};
  ${typography.body.bold.XS};
`;
