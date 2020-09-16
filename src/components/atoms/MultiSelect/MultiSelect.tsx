import React, { createRef, useState } from 'react';
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
  const multiSelectRef: any = createRef();
  const [isSelectOpened, setIsSelectOpened] = useState<boolean>(false);

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
          <Option text="Vue" />
          <Option text="React" />
          <Option text="Bootstrap" />
          <Option text="WordPress" />
        </StyledSelect>
      )}
    </StyledWrapper>
  );
};

export default MultiSelect;
