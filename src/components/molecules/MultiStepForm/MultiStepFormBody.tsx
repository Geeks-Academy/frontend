import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ActionButtons from './ActionButtons/ActionButtons';
import { IFormData, IMultiStepForm } from './Multistep.model';
import ProgressBar from './ProgressBar/ProgressBar';

const firstStep = 0;

const MultiStepFormBody = ({ children, onNext, onBack, onSubmit }: IMultiStepForm): JSX.Element => {
  const numberOfSteps = React.Children.count(children);
  const lastStep = numberOfSteps - 1;
  const steps = React.Children.toArray(children);

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
    await clearErrors();

    if (!status) return;

    updateCurrentForm();

    if (activeStep === lastStep) {
      handleSubmit({ ...form, ...formData });
      return;
    }

    setActiveStep((step) => step + 1);
    onNext(formData);
  };

  const handleBack = async () => {
    updateCurrentForm();

    setActiveStep((step) => step - 1);
    onBack(formData);
  };

  return (
    <div>
      <div>
        <ProgressBar activeStep={activeStep} steps={steps} />
        <ActionButtons
          firstStep={firstStep}
          numberOfSteps={numberOfSteps}
          lastStep={lastStep}
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      </div>
      <form>{steps[activeStep]}</form>
    </div>
  );
};

export default MultiStepFormBody;
