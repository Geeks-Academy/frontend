import { useState } from 'react';

interface IReturnValues {
  currentStep: number;
  goForward: () => void;
  goBack: () => void;
  goTo: (step: number) => void;
}

const useFormProgress = (): IReturnValues => {
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

  return { currentStep, goForward, goBack, goTo };
};

export default useFormProgress;
