import React, { useEffect, useState } from 'react';
import { ArrowIcon } from 'assets/index';
import {
  StyledArrowImage,
  StyledSelect,
  StyledSelectCaption,
  StyledTopWrapper,
  StyledWrapper,
} from './Select.styled';
import Option from '../Option';
import { ISelect } from './Select.model';

const Select = ({ isMulti, handleOnClick }: ISelect): JSX.Element => {
  const [isSelectOpened, setIsSelectOpened] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<(string | number)[]>([]);
  const [currentOptionValue, setCurrentOptionValue] = useState<any>(null);

  const removeSpecificItemFromArray = (array: any[], value: any) => {
    const indexValue = array.indexOf(value);
    array.splice(indexValue, 1);
    return array;
  };

  const updateSelectedOptions = (value: string | number, e: any) => {
    const clickedOptionValue = e.currentTarget.getAttribute('value');
    setCurrentOptionValue(clickedOptionValue);
    if (isMulti) {
      if (!selectedOptions.includes(value)) {
        setSelectedOptions([value, ...selectedOptions]);
      } else {
        const newArray = removeSpecificItemFromArray(selectedOptions, value);
        setSelectedOptions([...newArray]);
      }
    } else {
      setSelectedOptions([clickedOptionValue]);
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
          <Option
            text="Vue"
            value="Vue"
            isMulti={isMulti}
            selectedOptions={selectedOptions}
            currentOptionValue={currentOptionValue}
            updateSelectedOptions={updateSelectedOptions}
          />
          <Option
            text="React"
            value="React"
            isMulti={isMulti}
            selectedOptions={selectedOptions}
            currentOptionValue={currentOptionValue}
            updateSelectedOptions={updateSelectedOptions}
          />
          <Option
            text="Bootstrap"
            value="Bootstrap"
            isMulti={isMulti}
            selectedOptions={selectedOptions}
            currentOptionValue={currentOptionValue}
            updateSelectedOptions={updateSelectedOptions}
          />
          <Option
            text="WordPress"
            value="WordPress"
            isMulti={isMulti}
            selectedOptions={selectedOptions}
            currentOptionValue={currentOptionValue}
            updateSelectedOptions={updateSelectedOptions}
          />
        </StyledSelect>
      )}
    </StyledWrapper>
  );
};

export default Select;
