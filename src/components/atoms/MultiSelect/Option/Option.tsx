import React, { useEffect, useState } from 'react';
import { CheckedOptionIcon, UnCheckedOptionIcon } from 'assets/index';
import { IOption } from './Option.model';
import { StyledCircle, StyledOption, StyledOptionParagraph } from './Option.styled';

const Option = ({
  text,
  value,
  isMulti,
  selectedOptions,
  currentOptionValue,
  updateSelectedOptions,
}: IOption): JSX.Element => {
  const [isSelected, setIsSelected] = useState(() => {
    return selectedOptions.includes(value);
  });

  const handleOnOptionClick = (e: React.MouseEvent<HTMLLIElement>) => {
    updateSelectedOptions(value, e);
    if (isMulti) {
      setIsSelected(!isSelected);
    }
  };

  const manageIsSelectedState = () => {
    if (!isMulti) {
      if (value === currentOptionValue) {
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
      onClick={(e: React.MouseEvent<HTMLLIElement>) => handleOnOptionClick(e)}
      aria-selected={isSelected}
      value={value}
      role="option"
    >
      <StyledCircle
        alt={isSelected ? 'Checked option' : 'Unchecked option'}
        src={isSelected ? CheckedOptionIcon : UnCheckedOptionIcon}
      />
      <StyledOptionParagraph>{text}</StyledOptionParagraph>
    </StyledOption>
  );
};

export default Option;
