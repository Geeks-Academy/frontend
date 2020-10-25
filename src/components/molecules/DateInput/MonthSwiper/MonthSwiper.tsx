import React from 'react';
import { months } from '../DateInput.model';
import { IMonthSwiper } from './MonthSwiper.model';
import {
  StyledArrowButton,
  StyledArrowIcon,
  StyledMonthSwiper,
  StyledMonthText,
} from './MonthSwiper.styled';

const MonthSwiper = ({
  isRightButtonDisabled,
  isLeftButtonDisabled,
  setIsAnimationStart,
  animationClassName,
  isAnimationStart,
  handleRightArrow,
  handleLeftArrow,
  monthNumber,
}: IMonthSwiper): JSX.Element => {
  return (
    <StyledMonthSwiper>
      <StyledArrowButton disabled={isLeftButtonDisabled} onClick={handleLeftArrow}>
        <StyledArrowIcon position="left" />
      </StyledArrowButton>
      <StyledMonthText
        onAnimationEnd={() => setIsAnimationStart(false)}
        className={isAnimationStart ? animationClassName : ''}
      >
        {months[monthNumber]}
      </StyledMonthText>
      <StyledArrowButton disabled={isRightButtonDisabled} onClick={handleRightArrow}>
        <StyledArrowIcon position="right" />
      </StyledArrowButton>
    </StyledMonthSwiper>
  );
};

export default MonthSwiper;
