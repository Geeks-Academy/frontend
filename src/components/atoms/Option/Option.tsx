import React, { useState } from 'react';
import { CheckedOptionIcon, UnCheckedOptionIcon } from 'assets/index';
import { IOption } from './Option.model';
import { StyledCircle, StyledOption, StyledOptionParagraph } from './Option.styled';

const Option = ({ text }: IOption): JSX.Element => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <StyledOption
      onClick={() => setIsSelected(!isSelected)}
      aria-selected={isSelected}
      role="option"
    >
      <StyledCircle src={isSelected ? CheckedOptionIcon : UnCheckedOptionIcon} />
      <StyledOptionParagraph> {text} </StyledOptionParagraph>
    </StyledOption>
  );
};

export default Option;
