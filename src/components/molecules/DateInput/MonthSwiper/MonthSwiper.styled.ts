import styled from 'styled-components';
import { ArrowIconComponent } from 'assets';
import colors from 'styles/colors';

export const StyledMonthSwiper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 328px;
  background-color: white;
`;

export const StyledArrowButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const StyledArrowIcon = styled(ArrowIconComponent)<{ position: string }>`
  color: ${colors.background.Neutral40};
  transform: ${({ position }) => (position === 'left' ? `rotate(90deg)` : `rotate(-90deg)`)};
`;

export const StyledMonthText = styled.span`
  color: ${colors.background.Neutral20};
`;
