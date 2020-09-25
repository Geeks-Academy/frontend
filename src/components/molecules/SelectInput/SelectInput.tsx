import React from 'react';
import Select from './Select';
import { ISelectInput } from './SelectInput.model';

const SelectInput = ({
  isMulti,
  options,
  handleOnClick,
  selectCaption,
  inputPlaceholder,
}: ISelectInput): JSX.Element => {
  return (
    <Select
      inputPlaceholder={inputPlaceholder}
      selectCaption={selectCaption}
      handleOnClick={handleOnClick}
      isMulti={!!isMulti}
      options={options}
    />
  );
};

export default SelectInput;
