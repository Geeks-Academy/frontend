import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import MultiStepFormBody from './MultiStepFormBody';
import { IMultiStepForm } from './Multistep.model';

const MultiStepForm = ({ children, onNext, onBack, onSubmit }: IMultiStepForm): JSX.Element => {
  const methods = useForm();

  return (
    <div>
      <FormProvider {...methods}>
        <MultiStepFormBody onNext={onNext} onBack={onBack} onSubmit={onSubmit}>
          {children}
        </MultiStepFormBody>
      </FormProvider>
    </div>
  );
};

export default MultiStepForm;
