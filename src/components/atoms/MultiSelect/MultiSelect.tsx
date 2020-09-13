import React from 'react';
import { IMultiSelect } from './MultiSelect.model';
import { StyledMultiSelect, StyledOption, StyledWrapper } from './MultiSelect.styled';

const MultiSelect = ({ isMulti, handleOnClick }: IMultiSelect): JSX.Element => {
  return (
    <StyledWrapper>
      <StyledMultiSelect multiple={isMulti} onClick={handleOnClick}>
        <StyledOption> Multi select </StyledOption>
        <StyledOption value={1}> Option 3 </StyledOption>
        <StyledOption value={2}> Option 2 </StyledOption>
        <StyledOption value={3}> Option 3 </StyledOption>
        <StyledOption value={4}> Option 4 </StyledOption>
      </StyledMultiSelect>
    </StyledWrapper>
  );
};

export default MultiSelect;
