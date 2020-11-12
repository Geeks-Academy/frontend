import styled, { keyframes } from 'styled-components';
import { CalendarIcon } from 'assets';
import Input from 'components/atoms/Input';
import colors from 'styles/colors';
import typhography from 'styles/typography';

export const twinkleAnimation = () => keyframes`
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

export const StyledDateInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 328px;
  border: 2px solid ${colors.background.Neutral80};
  border-radius: 4px;
  background-color: white;
`;

export const StyledTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

export const StyledCalendarIcon = styled(CalendarIcon)`
  margin-right: 14px;
  color: ${colors.background.Neutral40};
`;

export const StyledLabel = styled.label`
  position: absolute;
  bottom: 100%;
  width: 100%;
  ${typhography.body.L};
  color: ${colors.background.Neutral20};
`;

export const StyledInput = styled(Input)`
  margin-right: 10px;
  width: 100%;
  div {
    border: none;
  }
`;

export const StyledBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;