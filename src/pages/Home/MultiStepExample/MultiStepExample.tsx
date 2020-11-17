import { IFormData } from 'components/molecules/MultiStepForm/Multistep.model';
import MultiStepForm from 'components/molecules/MultiStepForm/MultiStepForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateForm } from 'redux/reducers/multistep';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const MultiStepExample = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleSubmit = (formData: IFormData) => {
    console.log('formData', formData);
  };

  const handleNext = (formData: IFormData) => {
    dispatch(updateForm(formData));
  };

  const onBack = (formData: IFormData) => {
    dispatch(updateForm(formData));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '700px' }}>
        <MultiStepForm
          title="Test title"
          onSubmit={handleSubmit}
          onNext={handleNext}
          onBack={onBack}
        >
          <Step1 />
          <Step2 />
          <Step3 />
        </MultiStepForm>
      </div>
    </div>
  );
};

export default MultiStepExample;
