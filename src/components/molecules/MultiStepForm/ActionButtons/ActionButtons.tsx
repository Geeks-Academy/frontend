import React from 'react';
import Button from '../../../atoms/Button/index';
import { StyledButtonWrapper, StyledPreviousWrapper } from './ActionButton.styled';
import { IActionButtons } from './ActionButtons.model';

const ActionButtons = ({
  firstStep,
  activeStep,
  handleBack,
  handleNext,
  numberOfSteps,
  lastStep,
}: IActionButtons): JSX.Element => {
  return (
    <StyledButtonWrapper>
      <StyledPreviousWrapper>
        {activeStep > firstStep ? (
          <Button type="fill" onClick={handleBack}>
            Previous
          </Button>
        ) : null}
      </StyledPreviousWrapper>
      <div>
        <Button type={numberOfSteps === activeStep ? 'disabled' : 'fill'} onClick={handleNext}>
          {lastStep !== activeStep ? 'Next' : 'Finish'}
        </Button>
      </div>
    </StyledButtonWrapper>
  );
};
export default ActionButtons;
