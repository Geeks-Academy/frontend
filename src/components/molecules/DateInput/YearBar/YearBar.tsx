import React from 'react';
import { IYearBar } from './YearBar.model';
import { StyledGradient, StyledYear, StyledYearBar } from './YearBar.styled';

const YearBar = ({ year }: IYearBar): JSX.Element => {
  return (
    <StyledYearBar draggable="true" onDrop={() => console.log('elo')}>
      <StyledGradient className="left" />
      <StyledYear className="second"> {year - 2} </StyledYear>
      <StyledYear className="first"> {year - 1} </StyledYear>
      <StyledYear> {year} </StyledYear>
      <StyledYear className="first"> {year + 1} </StyledYear>
      <StyledYear className="second"> {year + 2} </StyledYear>
      <StyledGradient className="right" />
    </StyledYearBar>
  );
};

export default YearBar;
