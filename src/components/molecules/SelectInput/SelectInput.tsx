import React from 'react';
import Select from './Select';
import { ISelectInput } from './SelectInput.model';

const SelectInput = ({
  isMulti,
  options,
  onClick,
  selectCaption,
  inputPlaceholder,
}: ISelectInput): JSX.Element => {
  return (
    <Select
      inputPlaceholder={inputPlaceholder}
      selectCaption={selectCaption}
      onClick={onClick}
      isMulti={!!isMulti}
      options={options}
    />
  );
};

export default SelectInput;
