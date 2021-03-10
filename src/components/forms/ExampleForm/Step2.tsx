import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';

import Input from 'components/atoms/Input';
import { RootState } from 'redux/store';

const Step2 = (): JSX.Element => {
  const { register, errors } = useFormContext();

  const { fourstep, threestep } = useSelector((state: RootState) => state.multiStepExample);

  return (
    <div>
      <Input
        label="test"
        placeholder="test"
        name="threestep"
        defaultValue={threestep}
        ref={register({ required: 'this is required' })}
        error={errors.threestep?.message}
        fullWidth
      />
      <Input
        label="test"
        placeholder="test"
        name="fourstep"
        defaultValue={fourstep}
        ref={register({ required: 'this is required' })}
        error={errors.fourstep?.message}
        fullWidth
      />
    </div>
  );
};

export default Step2;
