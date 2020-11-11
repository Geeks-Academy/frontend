import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';

const Step2 = () => {
  const { register, errors } = useFormContext();

  const formState = useSelector((state: { multistep: { fivestep: string; sixstep: string } }) => {
    return state.multistep;
  });

  return (
    <div>
      <input
        name="fivestep"
        defaultValue={formState.fivestep}
        ref={register({ required: 'this is required' })}
      />
      {errors && errors.fivestep?.message && 'This one is required'}
      <input
        name="sixstep"
        defaultValue={formState.sixstep}
        ref={register({ required: 'this is required' })}
      />
      {errors && errors.sixstep?.message && 'This one is required'}
    </div>
  );
};

export default Step2;
