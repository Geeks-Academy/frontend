import React from 'react';
import Select from './Select';
import { ISelectInput } from './SelectInput.model';

const SelectInput = ({
  isMulti,
  options,
  onChange,
  selectCaption,
  inputPlaceholder,
  isOpen,
  ...props
}: ISelectInput): JSX.Element => {
  return (
    <Select
      inputPlaceholder={inputPlaceholder}
      selectCaption={selectCaption}
      isMulti={!!isMulti}
      onChange={onChange}
      options={options}
      isOpen={isOpen}
      {...props}
    />
  );
};

export default SelectInput;
