import Input from 'components/atoms/Input/Input';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';

const Step1 = (): JSX.Element => {
  const { register, errors } = useFormContext();

  const formState = useSelector(
    (state: { multistep: { onestep: string; twostep: string; testcheckbox: boolean } }) => {
      return state.multistep;
    }
  );

  const { onestep, twostep } = formState;

  return (
    <>
      <Input
        label="test"
        placeholder="test"
        name="onestep"
        defaultValue={onestep}
        ref={register({ required: 'this is required' })}
        fullWidth
      />
      {errors && errors.onestep?.message && 'This one is required'}
      <Input
        label="test"
        placeholder="test"
        name="twostep"
        defaultValue={twostep}
        ref={register({ required: 'this is required' })}
        fullWidth
      />
      {errors && errors.twostep?.message && 'This one is required'}
    </>
  );
};

export default Step1;
