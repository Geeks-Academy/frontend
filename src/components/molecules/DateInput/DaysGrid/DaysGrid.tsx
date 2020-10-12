import React from 'react';
import { IDaysGrid } from './DaysGrid.model';
import { StyledDaysGrid, StyledSquare } from './DaysGrid.styled';

const DaysGrid = ({ days }: IDaysGrid): JSX.Element => {
  return (
    <StyledDaysGrid>
      {days.map((day) => (
        <StyledSquare className={day.class} key={day.id}>
          {' '}
          {day.value}{' '}
        </StyledSquare>
      ))}
    </StyledDaysGrid>
  );
};

export default DaysGrid;
