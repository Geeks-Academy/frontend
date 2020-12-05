import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';

import Input from 'components/atoms/Input';
import { RootState } from 'redux/store';

const Step3 = (): JSX.Element => {
  const { register, errors } = useFormContext();

  const { fivestep, sixstep } = useSelector((state: RootState) => state.multiStepExample);

  return (
    <div>
      <Input
        label="test"
        placeholder="test"
        name="fivestep"
        defaultValue={fivestep}
        ref={register({ required: 'this is required' })}
        error={errors.fivestep?.message}
        fullWidth
      />
      <Input
        label="test"
        placeholder="test"
        name="sixstep"
        defaultValue={sixstep}
        ref={register({ required: 'this is required' })}
        error={errors.sixstep?.message}
        fullWidth
      />
    </div>
  );
};

export default Step3;
