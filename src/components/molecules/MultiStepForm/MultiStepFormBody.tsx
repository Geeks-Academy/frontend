import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ActionButtons from './ActionButtons/ActionButtons';
import { IFormData, IMultiStepForm } from './Multistep.model';
import { StyledTitle } from './MutliStepForm.styled';
import ProgressBar from './ProgressBar/ProgressBar';

const firstStep = 0;

const MultiStepFormBody = ({
  children,
  onNext,
  onBack,
  onSubmit,
  title,
}: IMultiStepForm): JSX.Element => {
  const numberOfSteps = React.Children.count(children);
  const lastStep = numberOfSteps - 1;
  const steps = React.Children.toArray(children);
  const numberOfStepsArray = Array.from(Array(steps.length).keys());

  const { trigger, watch, errors, clearErrors } = useFormContext();
  const formData = watch();

  const [form, setForm] = useState({});
  const [activeStep, setActiveStep] = useState(firstStep);

  const handleSubmit = (data: IFormData): void => {
    const hasNoErrors = Object.keys(errors).length === 0;

    if (hasNoErrors) {
      onSubmit(data);
    }
  };

  const updateCurrentForm = () => setForm((state) => ({ ...state, ...formData }));

  const handleNext = async () => {
    const status = await trigger();

    if (!status) return;

    updateCurrentForm();

    if (activeStep === lastStep) {
      handleSubmit({ ...form, ...formData });
      return;
    }

    setActiveStep((step) => step + 1);
    clearErrors();
    onNext(formData);
  };

  const handleBack = () => {
    updateCurrentForm();

    setActiveStep((step) => step - 1);
    onBack(formData);
  };

  return (
    <>
      {title ? <StyledTitle>test</StyledTitle> : null}
      <ProgressBar
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        steps={numberOfStepsArray}
      />
      <form>{steps[activeStep]}</form>
      <ActionButtons
        firstStep={firstStep}
        numberOfSteps={numberOfSteps}
        lastStep={lastStep}
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
      />
    </>
  );
};

export default MultiStepFormBody;
