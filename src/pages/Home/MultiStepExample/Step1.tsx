import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';

const Step1 = () => {
  const { register, errors } = useFormContext();

  const formState = useSelector(
    (state: { multistep: { onestep: string; twostep: string; testcheckbox: boolean } }) => {
      return state.multistep;
    }
  );

  const { onestep, twostep, testcheckbox } = formState;

  return (
    <>
      <input
        name="onestep"
        defaultValue={onestep}
        ref={register({ required: 'this is required' })}
      />
      {errors && errors.onestep?.message && 'This one is required'}
      <input
        name="twostep"
        defaultValue={twostep}
        ref={register({ required: 'this is required' })}
      />
      {errors && errors.twostep?.message && 'This one is required'}
      <input type="checkbox" name="testcheckbox" defaultChecked={testcheckbox} ref={register} />
    </>
  );
};

export default Step1;
