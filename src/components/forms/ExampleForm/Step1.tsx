import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';

import Input from 'components/atoms/Input';
import { RootState } from 'redux/store';

const Step1 = (): JSX.Element => {
  const { register, errors } = useFormContext();

  const { onestep, twostep } = useSelector((state: RootState) => state.multiStepExample);

  return (
    <div>
      <Input
        label="test"
        placeholder="test"
        name="onestep"
        defaultValue={onestep}
        ref={register({ required: 'this is required' })}
        error={errors?.onestep?.message}
        fullWidth
      />
      <Input
        label="test"
        placeholder="test"
        name="twostep"
        defaultValue={twostep}
        ref={register({ required: 'this is required' })}
        error={errors?.twostep?.message}
        fullWidth
      />
    </div>
  );
};

export default Step1;
