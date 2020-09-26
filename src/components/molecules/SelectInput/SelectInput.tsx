import React from 'react';
import Select from './Select';
import { ISelectInput } from './SelectInput.model';

const SelectInput = ({
  isMulti,
  options,
  onClick,
  selectCaption,
  inputPlaceholder,
  isOpen,
}: ISelectInput): JSX.Element => {
  return (
    <Select
      inputPlaceholder={inputPlaceholder}
      selectCaption={selectCaption}
      isMulti={!!isMulti}
      onClick={onClick}
      options={options}
      isOpen={isOpen}
    />
  );
};

export default SelectInput;
