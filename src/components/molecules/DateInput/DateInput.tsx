import React, { useState } from 'react';
import { IDateInput } from './DateInput.model';
import {
  StyledBottomWrapper,
  StyledCalendarIcon,
  StyledDateInput,
  StyledInput,
  StyledLabel,
  StyledTopWrapper,
} from './DateInput.styled';

const DateInput = ({ isOpen, labelName }: IDateInput): JSX.Element => {
  const [isOpenState, setIsOpenState] = useState(isOpen);
  return (
    <StyledDateInput>
      <StyledLabel>{labelName}</StyledLabel>
      <StyledTopWrapper>
        <StyledInput placeholder="01-01-2020" />
        <StyledCalendarIcon onClick={() => setIsOpenState(!isOpenState)} />
      </StyledTopWrapper>
      {isOpenState && <StyledBottomWrapper />}
    </StyledDateInput>
  );
};

export default DateInput;
