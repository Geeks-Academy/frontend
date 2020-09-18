import React, { useEffect, useState } from 'react';
import Select from './Select';
import { IMultiSelect } from './MultiSelect.model';

const MultiSelect = ({ isMulti }: IMultiSelect): JSX.Element => {
  const [array, setArray] = useState<any[]>([]);
  const handleOnClick = (callback: () => any[]): void | undefined => {
    setArray(callback());
  };

  // set array with selected options
  useEffect(() => {
    console.log(array);
  }, [array]);

  return <Select isMulti={isMulti} handleOnClick={handleOnClick} />;
};

export default MultiSelect;
