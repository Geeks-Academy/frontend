import React from 'react';
import { useSelector } from 'react-redux';

import { useFormProgress } from 'hooks';
import { RootState } from 'redux/store';
import { MultistepformNext, MultistepformSubmit } from 'assets';
import Button from 'components/atoms/Button';
import Steps from './Steps/Steps';
import { IMultiStepFrom } from './MultiStepFrom.model';
import { StyledAction, StyledContent, StyledMultiStepForm } from './MultiStepForm.styled';

const MultiStepForm = ({ onSubmit, children: steps, store }: IMultiStepFrom): JSX.Element => {
  const state = useSelector((s: RootState) => s[store]);

  const [currentStep, goForward, goBack, goTo] = useFormProgress();
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;

  const isEmpty = (value: any) => value === '';

  const isError = !!Object.values(state).find((v: any) => v.error || isEmpty(v.value));

  const handleSubmit = () => {
    onSubmit(state);
  };

  return (
    <StyledMultiStepForm>
      <div>
        <Steps numberOfSteps={steps.length} currentStep={currentStep} changeStep={goTo} />
      </div>
      <StyledContent>{steps[currentStep]}</StyledContent>
      <StyledAction>
        {!isFirst && (
          <Button variant="transparent" onClick={goBack}>
            Back
          </Button>
        )}
        {isError ? (
          <Button
            variant="disabled"
            iconPos="right"
            icon={isLast ? MultistepformSubmit : MultistepformNext}
          >
            {isLast ? 'Submit' : `Next`}
          </Button>
        ) : (
          <Button
            type="submit"
            iconPos="right"
            icon={isLast ? MultistepformSubmit : MultistepformNext}
            onClick={(e: any) => {
              e.preventDefault();

              if (isLast) {
                handleSubmit();
              } else {
                goForward();
              }
            }}
          >
            {isLast ? 'Submit' : `Next`}
          </Button>
        )}
      </StyledAction>
    </StyledMultiStepForm>
  );
};

export default MultiStepForm;
