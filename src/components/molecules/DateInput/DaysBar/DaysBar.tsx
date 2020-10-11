import React from 'react';
import { IDaysBar } from './DaysBar.model';
import { StyledDaysBar, StyledList, StyledListItem } from './DaysBar.styled';

const DaysBar = ({ daysOfTheWeek }: IDaysBar): JSX.Element => {
  return (
    <StyledDaysBar>
      <StyledList>
        {daysOfTheWeek.map((day) => (
          <StyledListItem key={day}> {day} </StyledListItem>
        ))}
      </StyledList>
    </StyledDaysBar>
  );
};

export default DaysBar;
