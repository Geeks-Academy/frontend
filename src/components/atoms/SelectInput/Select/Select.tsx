import React, { useEffect, useState } from 'react';
import { ArrowIcon } from 'assets';
import {
  StyledArrowImage,
  StyledSelect,
  StyledSelectCaption,
  StyledTopWrapper,
  StyledWrapper,
} from './Select.styled';
import Option from '../Option';
import { ISelect } from './Select.model';
import { ISingleOption } from '../SelectInput.model';

const Select = ({ isMulti, handleOnClick, options }: ISelect): JSX.Element => {
  const [isSelectOpened, setIsSelectOpened] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<ISingleOption[]>([]);
  const [currentOptionValue, setCurrentOptionValue] = useState<string>('');

  const doesArrayConsistValue = (value: string) => {
    return selectedOptions.filter((element: ISingleOption) => element.value === value).length;
  };

  const updateSelectedOptions = (option: ISingleOption): void => {
    const { value } = option;
    setCurrentOptionValue(value);
    if (isMulti) {
      if (!doesArrayConsistValue(value)) {
        setSelectedOptions([option, ...selectedOptions]);
      } else {
        const newArray = selectedOptions.filter(
          (element: ISingleOption) => element.value !== value
        );
        setSelectedOptions([...newArray]);
      }
    } else {
      setSelectedOptions([option]);
    }
  };

  useEffect(() => {
    handleOnClick(() => {
      return selectedOptions;
    });
  }, [selectedOptions, handleOnClick]);

  return (
    <StyledWrapper>
      <StyledTopWrapper onClick={() => setIsSelectOpened(!isSelectOpened)}>
        <StyledSelectCaption id="selectCaption">
          {isSelectOpened ? 'Start typing..' : 'Menu select'}
        </StyledSelectCaption>
        <StyledArrowImage src={ArrowIcon} isSelectOpened={isSelectOpened} />
      </StyledTopWrapper>
      {isSelectOpened && (
        <StyledSelect aria-multiselectable={isMulti} aria-labelledby="selectCaption" role="listbox">
          {options.map((option) => (
            <Option
              key={option.id}
              option={option}
              isMulti={isMulti}
              selectedOptions={selectedOptions}
              currentOptionValue={currentOptionValue}
              updateSelectedOptions={updateSelectedOptions}
            />
          ))}
        </StyledSelect>
      )}
    </StyledWrapper>
  );
};

export default Select;
