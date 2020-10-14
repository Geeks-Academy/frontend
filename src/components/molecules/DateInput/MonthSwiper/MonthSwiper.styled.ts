import styled, { keyframes } from 'styled-components';
import { ArrowIconComponent } from 'assets';
import colors from 'styles/colors';

const moveHorizontally = () => keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0);

  }
  100% {
    transform: scale(1);

  }
`;
export const StyledMonthSwiper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0 14px;
  width: 296px;
  height: 25px;
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

  &.next {
    animation: ${moveHorizontally()} 0.2s;
  }
  &.prev {
    animation: ${moveHorizontally()} 0.2s;
  }
`;
