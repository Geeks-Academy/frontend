import React from 'react';
import { SpinnerLeftBracketSVG, SpinnerRightBracketSVG } from 'assets/svg';
import { IAttributes } from 'types/interfaces';
import { SpinnerDots, SpinnerWrapper } from './Spinner.styled';

const Spinner = ({ ...props }: IAttributes<HTMLDivElement>): JSX.Element => {
  return (
    <SpinnerWrapper data-testid="spinner" {...props}>
      <div className="bracketLeft">
        <SpinnerLeftBracketSVG />
      </div>
      <SpinnerDots>
        <div className="spinnerDot" />
        <div className="spinnerDot" />
        <div className="spinnerDot" />
      </SpinnerDots>
      <div className="bracketRight">
        <SpinnerRightBracketSVG />
      </div>
    </SpinnerWrapper>
  );
};

export default Spinner;
