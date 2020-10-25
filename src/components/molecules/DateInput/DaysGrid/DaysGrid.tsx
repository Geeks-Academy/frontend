import React from 'react';
import { IDaysGrid } from './DaysGrid.model';
import { StyledDaysGrid, StyledSquare } from './DaysGrid.styled';

const DaysGrid = ({
  days,
  currentDay,
  handleOnClick,
  isAnimationStart,
  setIsAnimationStart,
  animationClassName,
}: IDaysGrid): JSX.Element => {
  return (
    <StyledDaysGrid
      onAnimationEnd={() => setIsAnimationStart(false)}
      className={isAnimationStart ? animationClassName : ''}
    >
      {days.map((
        day // install class lib...
      ) => (
        <StyledSquare
          className={`${day.class} ${
            day.value === currentDay && day.class === 'currentDay' ? 'point' : ''
          }`}
          key={day.id}
          onClick={() => handleOnClick(day)}
        >
          {day.value}
        </StyledSquare>
      ))}
    </StyledDaysGrid>
  );
};

export default DaysGrid;
