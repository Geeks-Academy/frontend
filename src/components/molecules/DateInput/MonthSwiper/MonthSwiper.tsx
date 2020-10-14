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
  monthNumber,
  animationClassName,
  isAnimationStart,
  setIsAnimationStart,
  handleLeftArrow,
  handleRightArrow,
}: IMonthSwiper): JSX.Element => {
  const getMonth = (type?: string) => {
    switch (type) {
      case 'left':
        return monthNumber < 1 ? months[11] : months[monthNumber - 1];
      case 'right':
        return monthNumber === 11 ? months[0] : months[monthNumber + 1];
      default:
        return months[monthNumber];
    }
  };

  return (
    <StyledMonthSwiper>
      <StyledArrowButton onClick={() => handleLeftArrow()}>
        <StyledArrowIcon position="left" />
      </StyledArrowButton>
      <StyledMonthText
        onAnimationEnd={() => setIsAnimationStart(false)}
        className={isAnimationStart ? animationClassName : ''}
      >
        {getMonth()}
      </StyledMonthText>
      <StyledArrowButton onClick={() => handleRightArrow()}>
        <StyledArrowIcon position="right" />
      </StyledArrowButton>
    </StyledMonthSwiper>
  );
};

export default MonthSwiper;
