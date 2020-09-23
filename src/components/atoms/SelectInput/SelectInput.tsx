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
  const manageIsMultiState = () => {
    if (typeof isMulti === 'undefined') {
      return false;
    }
    return isMulti;
  };
  return (
    <Select
      inputPlaceholder={inputPlaceholder}
      isMulti={manageIsMultiState()}
      handleOnClick={handleOnClick}
      options={options}
      selectCaption={selectCaption}
    />
  );
};

export default SelectInput;
