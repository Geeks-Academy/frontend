import React, { useEffect, useState } from 'react';
import { IOption } from './Option.model';
import {
  StyledCheckedOptionIcon,
  StyledOption,
  StyledOptionParagraph,
  StyledUnCheckedOptionIcon,
} from './Option.styled';

const Option = ({
  option,
  isMulti,
  selectedOptions,
  currentOptionId,
  updateSelectedOptions,
}: IOption): JSX.Element => {
  const [isSelected, setIsSelected] = useState(() => {
    return selectedOptions.some((element) => element.id === option.id);
  });

  const handleOnOptionClick = () => {
    updateSelectedOptions(option);
    if (isMulti) {
      setIsSelected(!isSelected);
    }
  };

  const manageIsSelectedState = () => {
    if (!isMulti) {
      if (option.id === currentOptionId) {
        setIsSelected(true);
      } else {
        setIsSelected(false);
      }
    }
  };

  useEffect(() => {
    manageIsSelectedState();
  });

  return (
    <StyledOption
      onClick={() => handleOnOptionClick()}
      aria-selected={isSelected}
      value={option.value}
      role="option"
    >
      {isSelected ? <StyledCheckedOptionIcon /> : <StyledUnCheckedOptionIcon />}
      <StyledOptionParagraph>{option.value}</StyledOptionParagraph>
    </StyledOption>
  );
};

export default Option;
