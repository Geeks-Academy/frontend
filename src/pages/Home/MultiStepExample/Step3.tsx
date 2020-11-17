import Input from 'components/atoms/Input/Input';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';

const Step3 = (): JSX.Element => {
  const { register, errors } = useFormContext();

  const { fivestep, sixstep } = useSelector(
    (state: { multistep: { fivestep: string; sixstep: string } }) => {
      return state.multistep;
    }
  );

  return (
    <div>
      <Input
        label="test"
        placeholder="test"
        name="fivestep"
        defaultValue={fivestep}
        ref={register({ required: 'this is required' })}
        fullWidth
      />
      {errors && errors.onestep?.message && 'This one is required'}
      <Input
        label="test"
        placeholder="test"
        name="sixstep"
        defaultValue={sixstep}
        ref={register({ required: 'this is required' })}
        fullWidth
      />
      {errors && errors.twostep?.message && 'This one is required'}
    </div>
  );
};

export default Step3;
