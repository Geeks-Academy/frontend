import React from 'react';
import { IWeekBar } from './WeekBar.model';
import { StyledList, StyledListItem, StyledWeekBar } from './WeekBar.styled';

const WeekBar = ({ daysOfTheWeek }: IWeekBar): JSX.Element => {
  return (
    <StyledWeekBar>
      <StyledList>
        {daysOfTheWeek.map((day) => (
          <StyledListItem key={day}> {day} </StyledListItem>
        ))}
      </StyledList>
    </StyledWeekBar>
  );
};

export default WeekBar;
