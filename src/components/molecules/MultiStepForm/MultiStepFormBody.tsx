import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import _ from 'lodash';

import { useFormProgress } from 'hooks';
import ActionButtons from './ActionButtons';
import { IFormData, IMultiStepForm } from './MultiStep.model';
import { StyledForm, StyledTitle } from './MultiStepForm.styled';
import ProgressBar from './ProgressBar';

const MultiStepFormBody = ({
  children,
  onNext,
  onBack,
  onSubmit,
  onCancel,
  title,
}: IMultiStepForm): JSX.Element => {
  const { trigger, watch, errors, clearErrors } = useFormContext();
  const { currentStep, goForward, goBack, goTo } = useFormProgress();

  const lastStep = React.Children.count(children) - 1;
  const steps = React.Children.toArray(children);
  const amountOfSteps = Array.from(Array(steps.length).keys());

  const formData = watch();

  const [form, setForm] = useState({});

  const handleSubmit = (data: IFormData): void => {
    if (_.isEmpty(errors)) {
      onSubmit(data);
    }
  };

  const updateCurrentForm = () => setForm((state) => ({ ...state, ...formData }));

  const handleNext = async () => {
    const status = await trigger();

    if (!status) return;

    updateCurrentForm();

    if (currentStep === lastStep) {
      handleSubmit({ ...form, ...formData });
      return;
    }

    goForward();
    clearErrors();
    onNext(formData);
  };

  const handleBack = () => {
    updateCurrentForm();

    goBack();
    onBack(formData);
  };

  return (
    <>
      {title && <StyledTitle>{title}</StyledTitle>}
      <ProgressBar activeStep={currentStep} steps={amountOfSteps} changeStep={goTo} />
      <StyledForm>{steps[currentStep]}</StyledForm>
      <ActionButtons
        lastStep={lastStep}
        activeStep={currentStep}
        onBack={handleBack}
        onNext={handleNext}
        onCancel={onCancel}
      />
    </>
  );
};

export default MultiStepFormBody;
