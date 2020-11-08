import { useState } from 'react';

const useFormProgress = (): [number, () => void, () => void, (step: number) => void] => {
  const [currentStep, setCurrentStep] = useState(0);

  const goForward = () => {
    setCurrentStep(currentStep + 1);
  };

  const goBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const goTo = (step: number) => {
    setCurrentStep(step);
  };

  return [currentStep, goForward, goBack, goTo];
};

export default useFormProgress;
