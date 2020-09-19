import React, { useEffect, useState } from 'react';
import Select from './Select';
import { IMultiSelect } from './MultiSelect.model';
import { ISingleOption } from './Select/Select.model';

const fakeOptions = [
  {
    id: 1,
    value: 'Bootstrap',
  },
  {
    id: 2,
    value: 'Angular',
  },
  {
    id: 3,
    value: 'JQuery',
  },
  {
    id: 4,
    value: 'Vue',
  },
  {
    id: 5,
    value: 'WordPress',
  },
];

const MultiSelect = ({ isMulti }: IMultiSelect): JSX.Element => {
  // temporary state only for testing - in the future, selectedOptions will be manage by Redux
  const [array, setArray] = useState<ISingleOption[]>([]);
  const handleOnClick = (callback: () => ISingleOption[]): void => {
    setArray(callback());
  };

  useEffect(() => {
    // console.log("SelectedArray: ", array);
  }, [array]);

  return <Select isMulti={isMulti} handleOnClick={handleOnClick} options={fakeOptions} />;
};

export default MultiSelect;
