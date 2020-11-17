import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { IMultiStepForm } from './Multistep.model';
import MultiStepFormBody from './MultiStepFormBody';

const MultiStepForm = ({
  children,
  title,
  onNext,
  onBack,
  onSubmit,
}: IMultiStepForm): JSX.Element => {
  const methods = useForm();

  return (
    <div>
      <FormProvider {...methods}>
        <MultiStepFormBody title={title} onNext={onNext} onBack={onBack} onSubmit={onSubmit}>
          {children}
        </MultiStepFormBody>
      </FormProvider>
    </div>
  );
};

export default MultiStepForm;
