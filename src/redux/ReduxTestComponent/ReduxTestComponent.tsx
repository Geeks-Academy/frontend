import { yupResolver } from '@hookform/resolvers/yup';

import Spinner from 'components/atoms/Spinner';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import loader from 'redux/reducers/loader';
import { RootState, store } from 'redux/store';
import * as yup from 'yup';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import MultiStepForm from '../../components/molecules/MultiStepForm/MultiStepForm';
import form from '../reducers/form';

const schema = yup.object().shape({
  name: yup.string().required('This field is required!').max(10, 'This text is too long'),
  surname: yup.string().required().max(10),
});

const schema2 = yup.object().shape({
  age: yup.number().positive().integer(),
});

const ReduxTestComponent = (): JSX.Element => {
  const showLoader = useSelector((state: RootState) => state.loader.isLoading);
  const dataForm = useSelector((state: RootState) => state.form.data);
  const { toggleLoader } = loader.actions;
  const { saveForm } = form.actions;
  const [currentStep, setCurrentStep] = useState(1);
  const numberOfSteps = 2;
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const { register: register2, errors: errors2, handleSubmit: handleSubmit2 } = useForm({
    resolver: yupResolver(schema2),
  });

  const onSubmit = (data: any) => {
    store.dispatch(saveForm(data));
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
      {showLoader && <Spinner />}
      <button type="button" onClick={() => store.dispatch(toggleLoader())}>
        {!showLoader ? 'Show loader' : 'Hide Loader'}
      </button>
      <MultiStepForm currentStep={currentStep} numberOfSteps={numberOfSteps} summary={dataForm}>
        <form key={1} onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="surname"
            label="Surname"
            ref={register}
            error={errors.surname?.message}
          />
          <Input placeholder="name" label="Name" ref={register} error={errors.name?.message} />
          <Button type="submit">{currentStep < numberOfSteps ? 'Next' : 'Finish'}</Button>
        </form>
        <form key={2} onSubmit={handleSubmit2(onSubmit)}>
          <Input placeholder="age" label="Age" ref={register2} error={errors2.age?.message} />
          <Button type="submit">{currentStep < numberOfSteps ? 'Next' : 'Finish'}</Button>
        </form>
      </MultiStepForm>
    </>
  );
};

export default ReduxTestComponent;
