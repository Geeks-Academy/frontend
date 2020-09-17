import React, { useEffect, useRef, useState } from 'react';
import { ArrowIcon } from 'assets/index';
import { IMultiSelect } from './MultiSelect.model';
import {
  StyledArrowImage,
  StyledSelect,
  StyledSelectCaption,
  StyledTopWrapper,
  StyledWrapper,
} from './MultiSelect.styled';
import Option from '../Option';

const MultiSelect = ({ isMulti, handleOnClick }: IMultiSelect): JSX.Element => {
  const multiSelectRef: any = useRef();
  const [isSelectOpened, setIsSelectOpened] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<(string | number)[]>([]);

  const removeSpecificItemFromArray = (array: any[], value: any) => {
    const indexValue = array.indexOf(value);
    array.splice(indexValue, 1);
    return array;
  };

  const updateSelectedOptions = (value: string | number) => {
    if (!selectedOptions.includes(value)) {
      setSelectedOptions([value, ...selectedOptions]);
    } else {
      const newArray = removeSpecificItemFromArray(selectedOptions, value);
      setSelectedOptions([...newArray]);
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
        <StyledSelectCaption id="ss_elem">
          {isSelectOpened ? 'Start typing..' : 'Menu select'}
        </StyledSelectCaption>
        <StyledArrowImage src={ArrowIcon} isSelectOpened={isSelectOpened} />
      </StyledTopWrapper>
      {isSelectOpened && (
        <StyledSelect
          aria-multiselectable={isMulti}
          aria-labelledby="ss_elem"
          role="listbox"
          ref={multiSelectRef}
        >
          <Option
            text="Vue"
            value="Vue"
            selectedOptions={selectedOptions}
            updateSelectedOptions={updateSelectedOptions}
          />
          <Option
            text="React"
            value="React"
            selectedOptions={selectedOptions}
            updateSelectedOptions={updateSelectedOptions}
          />
          <Option
            text="Bootstrap"
            value="Bootstrap"
            selectedOptions={selectedOptions}
            updateSelectedOptions={updateSelectedOptions}
          />
          <Option
            text="WordPress"
            value="WordPress"
            selectedOptions={selectedOptions}
            updateSelectedOptions={updateSelectedOptions}
          />
        </StyledSelect>
      )}
    </StyledWrapper>
  );
};

export default MultiSelect;
