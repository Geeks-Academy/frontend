import React, { useState } from 'react';
import Button from '../../atoms/Button';
import { StyledAction, StyledContent, StyledMultiStepForm } from './MultiStepForm.styled';

import { IMultiStepFrom } from './MutliStepFrom.model';
import Steps from './Steps/Steps';

const MultiStepForm = ({ onSubmit, children }: IMultiStepFrom): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(0);
  const step = currentStep + 1;
  const formSteps = React.Children.toArray(children);
  const numberOfSteps = React.Children.count(children);
  const nextStep = () => (step < numberOfSteps ? setCurrentStep(step) : onSubmit);

  return (
    <StyledMultiStepForm>
      <Steps numberOfSteps={numberOfSteps} currentStep={currentStep} prevStep={setCurrentStep} />
      <StyledContent>{formSteps[currentStep]}</StyledContent>
      <StyledAction>
        <Button type="submit" onClick={nextStep}>
          {step < numberOfSteps ? 'Next' : 'Finish'}
        </Button>
      </StyledAction>
    </StyledMultiStepForm>
  );
};

export default MultiStepForm;
