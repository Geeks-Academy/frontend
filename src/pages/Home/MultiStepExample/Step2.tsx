import Input from 'components/atoms/Input/Input';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';

const Step2 = (): JSX.Element => {
  const { register, errors } = useFormContext();

  const { fourstep, threestep } = useSelector(
    (state: { multistep: { threestep: string; fourstep: string } }) => {
      return state.multistep;
    }
  );

  return (
    <div>
      <Input
        label="test"
        placeholder="test"
        name="threestep"
        defaultValue={threestep}
        ref={register({ required: 'this is required' })}
        fullWidth
      />
      {errors && errors.onestep?.message && 'This one is required'}
      <Input
        label="test"
        placeholder="test"
        name="fourstep"
        defaultValue={fourstep}
        ref={register({ required: 'this is required' })}
        fullWidth
      />
      {errors && errors.twostep?.message && 'This one is required'}
    </div>
  );
};

export default Step2;
