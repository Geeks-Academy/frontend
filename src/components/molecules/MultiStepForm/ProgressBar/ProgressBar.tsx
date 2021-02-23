import React from 'react';

import { useDispatch } from 'react-redux';
import reducer from 'redux/reducers/multiStepExample';
import { IProgressBar } from './ProgressBar.model';
import {
  StyledProgressBar,
  StyledProgressBarItem,
  StyledProgressBarItemWrapper,
} from './ProgressBar.styled';

const ProgressBar = ({ steps, activeStep, changeStep, formData }: IProgressBar): JSX.Element => {
  const dispatch = useDispatch();
  const { updateForm } = reducer.actions;

  const onChange = (step: number) => () => {
    if (activeStep > step) {
      changeStep(step);
      dispatch(updateForm(formData));
    }
  };

  return (
    <StyledProgressBar>
      {steps.map((step: number) => (
        <StyledProgressBarItemWrapper key={step} activeBar={activeStep > step}>
          <StyledProgressBarItem onClick={onChange(step)} active={activeStep > step - 1}>
            {step + 1}
          </StyledProgressBarItem>
        </StyledProgressBarItemWrapper>
      ))}
    </StyledProgressBar>
  );
};

export default ProgressBar;
