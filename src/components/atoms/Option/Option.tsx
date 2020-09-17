import React, { useState } from 'react';
import { CheckedOptionIcon, UnCheckedOptionIcon } from 'assets/index';
import { IOption } from './Option.model';
import { StyledCircle, StyledOption, StyledOptionParagraph } from './Option.styled';

const Option = ({ text, value, updateSelectedOptions, selectedOptions }: IOption): JSX.Element => {
  const [isSelected, setIsSelected] = useState(() => {
    return selectedOptions.includes(value);
  });

  const testFunction = () => {
    updateSelectedOptions(value);
    setIsSelected(!isSelected);
  };

  return (
    <StyledOption
      onClick={() => testFunction()}
      aria-selected={isSelected}
      value={value}
      role="option"
    >
      <StyledCircle
        alt={isSelected ? 'Checked option' : 'Unchecked option'}
        src={isSelected ? CheckedOptionIcon : UnCheckedOptionIcon}
      />
      <StyledOptionParagraph> {text} </StyledOptionParagraph>
    </StyledOption>
  );
};

export default Option;
