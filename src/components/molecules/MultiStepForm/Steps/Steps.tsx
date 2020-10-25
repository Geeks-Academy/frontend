import React from 'react';
import { IStep } from './Step.model';
import { StyledContainer, StyledLine, StyledNumber, StyledWrapper } from './Step.styled';

const Steps = ({ steps, currentStep }: IStep): JSX.Element => {
  return (
    <StyledWrapper>
      {[...Array(steps)].map((obj, step) => (
        <StyledContainer key={step as number}>
          <StyledNumber done={step <= currentStep}>{step + 1}</StyledNumber>
          {step + 1 === steps ? null : <StyledLine done={step + 1 <= currentStep} />}
        </StyledContainer>
      ))}
    </StyledWrapper>
  );
};

export default Steps;
