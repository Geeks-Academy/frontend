import React from 'react';
import { StyledContent, StyledMultiStepForm, StyledSummary } from './MultiStepForm.styled';

import { IMultiStepFrom } from './MutliStepFrom.model';
import Steps from './Steps/Steps';

const MultiStepForm = ({
  currentStep,
  numberOfSteps,
  summary,
  children,
}: IMultiStepFrom): JSX.Element => {
  const formSteps = React.Children.toArray(children);

  return (
    <StyledMultiStepForm>
      <Steps steps={numberOfSteps} currentStep={currentStep - 1} />
      {currentStep > numberOfSteps ? (
        <StyledSummary>
          <div>Podsumowanie:</div>
          {Object.entries(summary).map(([key, val]) => (
            <div key={key}>
              {key}: {val}
            </div>
          ))}
        </StyledSummary>
      ) : (
        <StyledContent>{formSteps[currentStep - 1]}</StyledContent>
      )}
    </StyledMultiStepForm>
  );
};

export default MultiStepForm;
