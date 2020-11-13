import React from 'react';
import { IProgressBar } from './ProgressBar.model';
import {
  StyledProgressBar,
  StyledProgressBarItem,
  StyledProgressBarItemWrapper,
} from './ProgressBar.styled';

const ProgressBar = ({ steps, activeStep, setActiveStep }: IProgressBar): JSX.Element => {
  const onChange = (step: number) => () => {
    if (activeStep > step) {
      setActiveStep(step);
    }
  };

  return (
    <StyledProgressBar>
      {steps &&
        steps.map((step: number) => (
          <StyledProgressBarItemWrapper activeBar={activeStep > step}>
            <StyledProgressBarItem
              onClick={onChange(step)}
              key={step}
              active={activeStep > step - 1}
            >
              {step}
            </StyledProgressBarItem>
          </StyledProgressBarItemWrapper>
        ))}
    </StyledProgressBar>
  );
};

export default ProgressBar;
