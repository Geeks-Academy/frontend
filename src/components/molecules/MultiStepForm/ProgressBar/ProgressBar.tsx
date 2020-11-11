import React from 'react';
import { IProgressBar } from './ProgressBar.model';
import { StyledProgressBar, StyledProgressBarItem } from './ProgressBar.styled';

const ProgressBar = ({ steps, activeStep }: IProgressBar): JSX.Element => {
  return (
    <StyledProgressBar>
      {steps &&
        steps.map((step: number) => {
          return (
            <StyledProgressBarItem
              key={step}
              active={activeStep > step - 1}
              activeBar={activeStep > step}
            >
              {step}
            </StyledProgressBarItem>
          );
        })}
    </StyledProgressBar>
  );
};

export default ProgressBar;
