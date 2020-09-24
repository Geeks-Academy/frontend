import React, { MouseEvent, useEffect, useState } from 'react';
import { ArrowIcon } from 'assets';
import {
  StyledArrowImage,
  StyledInput,
  StyledSelect,
  StyledSelectCaption,
  StyledTopWrapper,
  StyledWrapper,
} from './Select.styled';
import Option from '../Option';
import { ISelect } from './Select.model';
import { ISingleOption } from '../SelectInput.model';

const Select = ({
  isMulti,
  options,
  handleOnClick,
  selectCaption,
  inputPlaceholder,
}: ISelect): JSX.Element => {
  const [currentOptionId, setCurrentOptionId] = useState<string>('');
  const [isSelectOpened, setIsSelectOpened] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<ISingleOption[]>([]);
  const [mutableOptions, setMutableOptions] = useState<ISingleOption[]>(options);

  const doesArrayConsistValue = (id: string) => {
    return selectedOptions.filter((element: ISingleOption) => element.id === id).length;
  };

  const isInputEmpty = (value: string) => {
    return value === '';
  };

  const isInputTextMatch = (inputText: string, value: string) => {
    const regex = new RegExp(`^${inputText}`, 'i');
    return regex.test(value);
  };

  const updateSelectedOptions = (option: ISingleOption): void => {
    const { id } = option;
    setCurrentOptionId(id);
    if (isMulti) {
      if (!doesArrayConsistValue(id)) {
        setSelectedOptions([option, ...selectedOptions]);
      } else {
        const newArray = selectedOptions.filter((element: ISingleOption) => element.id !== id);
        setSelectedOptions([...newArray]);
      }
    } else {
      setSelectedOptions([option]);
    }
  };

  const hideList = () => {
    setIsSelectOpened(false);
  };

  const filterOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const tempOptions: ISingleOption[] = [];

    options.forEach((option) => {
      if (isInputTextMatch(inputValue, option.value)) {
        tempOptions.push(option);
      }
    });

    if (!isInputEmpty(inputValue)) {
      setMutableOptions(tempOptions);
    } else {
      setMutableOptions(options);
    }
  };

  const toggleList = (e: MouseEvent<HTMLDivElement>) => {
    const clickedElementName = (e.target as HTMLDivElement).localName;
    if (clickedElementName !== 'input') {
      setIsSelectOpened(!isSelectOpened);
    }
  };

  useEffect(() => {
    handleOnClick(() => {
      return selectedOptions;
    });
  }, [selectedOptions, handleOnClick]);

  return (
    <StyledWrapper onMouseLeave={() => hideList()}>
      <StyledTopWrapper onClick={(e: MouseEvent<HTMLDivElement>) => toggleList(e)}>
        {isSelectOpened ? (
          <StyledInput
            placeholder={inputPlaceholder}
            handleOnChange={(e: React.ChangeEvent<HTMLInputElement>) => filterOptions(e)}
          />
        ) : (
          <StyledSelectCaption id="selectCaption">{selectCaption}</StyledSelectCaption>
        )}
        <StyledArrowImage isSelectOpened={isSelectOpened} src={ArrowIcon} />
      </StyledTopWrapper>
      {isSelectOpened && (
        <StyledSelect aria-multiselectable={isMulti} aria-labelledby="selectCaption" role="listbox">
          {mutableOptions.map((option) => (
            <Option
              key={option.id}
              option={option}
              isMulti={isMulti}
              selectedOptions={selectedOptions}
              currentOptionId={currentOptionId}
              updateSelectedOptions={updateSelectedOptions}
            />
          ))}
        </StyledSelect>
      )}
    </StyledWrapper>
  );
};

export default Select;
