import React from 'react';
import classNames from 'classnames';
import { Day, IDaysGrid } from './DaysGrid.model';
import { StyledDaysGrid, StyledSquare } from './DaysGrid.styled';

const DaysGrid = ({
  days,
  currentDay,
  handleOnClick,
  isAnimationStart,
  setIsAnimationStart,
  animationClassName,
}: IDaysGrid): JSX.Element => {
  const squareClasses = (day: Day) =>
    classNames({
      prevDay: day.class === 'prevDay',
      currentDay: day.class === 'currentDay',
      nextDay: day.class === 'nextDay',
      point: day.value === currentDay && day.class === 'currentDay',
    });

  return (
    <StyledDaysGrid
      onAnimationEnd={() => setIsAnimationStart(false)}
      className={isAnimationStart ? animationClassName : ''}
    >
      {days.map((day) => (
        <StyledSquare
          className={squareClasses(day)}
          onClick={() => handleOnClick(day)}
          key={day.id}
        >
          {day.value}
        </StyledSquare>
      ))}
    </StyledDaysGrid>
  );
};

export default DaysGrid;
