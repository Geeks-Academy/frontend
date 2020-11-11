import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';

const Step2 = () => {
  const { register } = useFormContext();

  const formState = useSelector((state: { multistep: { threestep: string; fourstep: string } }) => {
    return state.multistep;
  });

  return (
    <div>
      <input
        name="threestep"
        defaultValue={formState.threestep}
        ref={register({ required: 'this is required' })}
      />
      <input name="fourstep" defaultValue={formState.fourstep} ref={register} />
    </div>
  );
};

export default Step2;
