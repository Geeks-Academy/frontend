import React from 'react';
import { IMonthSwiper } from './MonthSwiper.model';
import {
  StyledArrowButton,
  StyledArrowIcon,
  StyledMonthSwiper,
  StyledMonthText,
} from './MonthSwiper.styled';

const MonthSwiper = ({ month, handleLeftArrow, handleRightArrow }: IMonthSwiper): JSX.Element => {
  return (
    <StyledMonthSwiper>
      <StyledArrowButton onClick={() => handleLeftArrow()}>
        <StyledArrowIcon position="left" />
      </StyledArrowButton>
      <StyledMonthText> {month} </StyledMonthText>
      <StyledArrowButton onClick={() => handleRightArrow()}>
        <StyledArrowIcon position="right" />
      </StyledArrowButton>
    </StyledMonthSwiper>
  );
};

export default MonthSwiper;
