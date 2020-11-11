import React from 'react';
import { IProgressBar } from './ProgressBar.model';

const ProgressBar = ({ steps, activeStep }: IProgressBar): JSX.Element => {
  return (
    <>
      {steps &&
        steps.map((step: { [key: string]: string }, index: number) => {
          const { key } = step;

          return (
            <div key={key} style={{ backgroundColor: activeStep === index ? 'red' : '' }}>
              {index}
            </div>
          );
        })}
    </>
  );
};

export default ProgressBar;
