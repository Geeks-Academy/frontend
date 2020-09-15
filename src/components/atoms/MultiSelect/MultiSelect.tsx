import React, { createRef, useState } from 'react';
import { ArrowIcon } from 'assets/index';
import { IMultiSelect } from './MultiSelect.model';
import {
  StyledArrowImage,
  StyledCircle,
  StyledOption,
  StyledOptionParagraph,
  StyledSelect,
  StyledSelectCaption,
  StyledTopWrapper,
  StyledWrapper,
} from './MultiSelect.styled';

const MultiSelect = ({ isMulti, handleOnClick }: IMultiSelect): JSX.Element => {
  const multiSelectRef: any = createRef();
  const [isSelectOpened, setIsSelectOpened] = useState<boolean>(false);
  const [selectedOptionArray, setSelectedOptionArray] = useState([false, false, false, false]);

  const updateSingleArrayElement = (index: number | undefined, value: boolean) => {
    const tempArray = selectedOptionArray;
    if (typeof index !== 'undefined') {
      tempArray[index] = value;
    }
    return tempArray;
  };

  const getIndex = (current: HTMLLIElement) => {
    const elements = multiSelectRef.current.children;
    const elementsLength = elements.length;

    let index;
    for (let i = 0; i < elementsLength; i += 1) {
      if (elements[i] === current) {
        index = i;
      }
    }
    return index;
  };

  const setOptionAttribute = (e: React.MouseEvent<HTMLLIElement>) => {
    const clickedElement = e.currentTarget;
    const clickedElementIndex = getIndex(clickedElement);
    const isSelected = clickedElement.getAttribute('aria-selected');
    if (isSelected === 'true') {
      clickedElement.setAttribute('aria-selected', 'false');
      setSelectedOptionArray(updateSingleArrayElement(clickedElementIndex, false));
    } else {
      clickedElement.setAttribute('aria-selected', 'true');
      setSelectedOptionArray(updateSingleArrayElement(clickedElementIndex, true));
    }
  };

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
          onClick={handleOnClick}
        >
          <StyledOption
            onClick={(e: React.MouseEvent<HTMLLIElement>) => setOptionAttribute(e)}
            isSelected={selectedOptionArray[0]}
            aria-selected={selectedOptionArray[0]}
            role="option"
            value="1"
          >
            <StyledCircle />
            <StyledOptionParagraph> Option 1 </StyledOptionParagraph>
          </StyledOption>

          <StyledOption
            onClick={(e: React.MouseEvent<HTMLLIElement>) => setOptionAttribute(e)}
            isSelected={selectedOptionArray[1]}
            aria-selected={selectedOptionArray[1]}
            role="option"
            value="2"
          >
            <StyledCircle />
            <StyledOptionParagraph> Option 2 </StyledOptionParagraph>
          </StyledOption>

          <StyledOption
            onClick={(e: React.MouseEvent<HTMLLIElement>) => setOptionAttribute(e)}
            isSelected={selectedOptionArray[2]}
            aria-selected={selectedOptionArray[2]}
            role="option"
            value="3"
          >
            <StyledCircle />
            <StyledOptionParagraph> Option 3 </StyledOptionParagraph>
          </StyledOption>

          <StyledOption
            onClick={(e: React.MouseEvent<HTMLLIElement>) => setOptionAttribute(e)}
            isSelected={selectedOptionArray[3]}
            aria-selected={selectedOptionArray[3]}
            role="option"
            value="4"
          >
            <StyledCircle />
            <StyledOptionParagraph> Option 4 </StyledOptionParagraph>
          </StyledOption>
        </StyledSelect>
      )}
    </StyledWrapper>
  );
};

export default MultiSelect;
