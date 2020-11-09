import React from 'react';
import { IStep } from './Step.model';
import { StyledContainer, StyledLine, StyledNumber, StyledWrapper } from './Step.styled';

const Steps = ({ numberOfSteps, currentStep, changeStep }: IStep): JSX.Element => {
  const selectStep = (step: number) => {
    if (step <= currentStep) {
      changeStep(step);
    }
  };

  return (
    <StyledWrapper>
      {[...Array(numberOfSteps)].map((_, step) => (
        <StyledContainer key={step as number}>
          <StyledNumber onClick={() => selectStep(step)} done={step <= currentStep}>
            {step + 1}
          </StyledNumber>
          {step + 1 !== numberOfSteps && <StyledLine done={step + 1 <= currentStep} />}
        </StyledContainer>
      ))}
    </StyledWrapper>
  );
};

export default Steps;
