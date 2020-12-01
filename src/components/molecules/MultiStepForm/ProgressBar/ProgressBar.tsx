import React from 'react';

import { IProgressBar } from './ProgressBar.model';
import {
  StyledProgressBar,
  StyledProgressBarItem,
  StyledProgressBarItemWrapper,
} from './ProgressBar.styled';

const ProgressBar = ({ steps, activeStep, changeStep }: IProgressBar): JSX.Element => {
  const onChange = (step: number) => () => {
    if (activeStep > step) {
      changeStep(step);
    }
  };

  return (
    <StyledProgressBar>
      {steps.map((step: number) => (
        <StyledProgressBarItemWrapper key={step} activeBar={activeStep > step}>
          <StyledProgressBarItem onClick={onChange(step)} active={activeStep > step - 1}>
            {step}
          </StyledProgressBarItem>
        </StyledProgressBarItemWrapper>
      ))}
    </StyledProgressBar>
  );
};

export default ProgressBar;
