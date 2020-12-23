import React from 'react';
import { useDispatch } from 'react-redux';

import { IFormData } from 'components/molecules/MultiStepForm/MultiStep.model';
import MultiStepForm from 'components/molecules/MultiStepForm';
import reducer from 'redux/reducers/multiStepExample';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const ExampleForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const { updateForm, clearForm } = reducer.actions;

  const handleSubmit = (formData: IFormData) => {
    console.log('formData', formData);
  };

  const handleNext = (formData: IFormData) => {
    dispatch(updateForm(formData));
  };

  const handleBack = (formData: IFormData) => {
    dispatch(updateForm(formData));
  };

  const handleCancel = () => {
    console.log('cancel');
    dispatch(clearForm());
  };

  return (
    <MultiStepForm
      title="Example Form"
      onCancel={handleCancel}
      onSubmit={handleSubmit}
      onNext={handleNext}
      onBack={handleBack}
    >
      <Step1 />
      <Step2 />
      <Step3 />
    </MultiStepForm>
  );
};

export default ExampleForm;
