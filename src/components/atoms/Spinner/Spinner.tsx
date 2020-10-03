import React from 'react';
import { SpinnerLeftBracketSVG, SpinnerRightBracketSVG } from 'assets';
import { IProps } from './Spinner.model';
import { SpinnerDots, SpinnerWrapper } from './Spinner.styled';

const Spinner = ({ className }: IProps): JSX.Element => {
  return (
    <SpinnerWrapper data-testid="spinner" className={className}>
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
