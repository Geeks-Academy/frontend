import React from 'react';

import Button from 'components/atoms/Button';
import { MultistepformNext, MultistepformSubmit } from 'assets';
import { StyledButtonWrapper } from './ActionButton.styled';
import { IActionButtons } from './ActionButtons.model';

const ActionButtons = ({
  activeStep,
  onBack,
  onNext,
  onCancel,
  lastStep,
}: IActionButtons): JSX.Element => {
  const FIRST_STEP = 0;
  return (
    <StyledButtonWrapper>
      {activeStep === FIRST_STEP && <Button onClick={onCancel}>Cancel</Button>}
      {activeStep > FIRST_STEP && <Button onClick={onBack}>Back</Button>}
      {activeStep === lastStep && (
        <Button icon={MultistepformSubmit} iconPos="right" onClick={onNext}>
          Submit
        </Button>
      )}
      {activeStep !== lastStep && (
        <Button icon={MultistepformNext} iconPos="right" onClick={onNext}>
          Next
        </Button>
      )}
    </StyledButtonWrapper>
  );
};
export default ActionButtons;
