import React, { useState } from 'react';
import Button from '../../atoms/Button';
import { StyledAction, StyledContent, StyledMultiStepForm } from './MultiStepForm.styled';

import { IMultiStepFrom } from './MutliStepFrom.model';
import Steps from './Steps/Steps';

const MultiStepForm = ({ children }: IMultiStepFrom): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(0);
  const formSteps = React.Children.toArray(children);
  const numberOfSteps = React.Children.count(children);
  const nextStep = () =>
    currentStep + 1 < numberOfSteps ? setCurrentStep(currentStep + 1) : console.log('finish');

  return (
    <StyledMultiStepForm>
      <Steps steps={numberOfSteps} currentStep={currentStep} />
      <StyledContent>{formSteps[currentStep]}</StyledContent>
      <StyledAction>
        <Button onClick={nextStep}>{currentStep + 1 < numberOfSteps ? 'Next' : 'Finish'}</Button>
      </StyledAction>
    </StyledMultiStepForm>
  );
};

export default MultiStepForm;
