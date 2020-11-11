import React from 'react';
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
    <>
      {activeStep > firstStep ? (
        <button type="button" onClick={handleBack}>
          Previous
        </button>
      ) : null}

      <button type="submit" onClick={handleNext} disabled={numberOfSteps === activeStep}>
        {lastStep !== activeStep ? 'Next' : 'Finish'}
      </button>
    </>
  );
};

export default ActionButtons;
