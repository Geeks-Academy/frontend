import React from 'react';
import { IProgressBar } from './ProgressBar.model';
import {
  StyledProgressBar,
  StyledProgressBarItem,
  StyledProgressBarItemWrapper,
} from './ProgressBar.styled';

const ProgressBar = ({ steps, activeStep }: IProgressBar): JSX.Element => {
  return (
    <StyledProgressBar>
      {steps &&
        steps.map((step: number) => {
          return (
            <StyledProgressBarItemWrapper activeBar={activeStep > step}>
              <StyledProgressBarItem key={step} active={activeStep > step - 1}>
                {step}
              </StyledProgressBarItem>
            </StyledProgressBarItemWrapper>
          );
        })}
    </StyledProgressBar>
  );
};

export default ProgressBar;
