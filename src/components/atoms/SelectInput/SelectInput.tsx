import React from 'react';
import Select from './Select';
import { ISelectInput } from './SelectInput.model';

const SelectInput = ({ isMulti, options, handleOnClick }: ISelectInput): JSX.Element => {
  return <Select isMulti={isMulti} handleOnClick={handleOnClick} options={options} />;
};

export default SelectInput;
