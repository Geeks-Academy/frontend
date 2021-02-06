import React from 'react';
import { SpinnerLeftBracketSVG, SpinnerRightBracketSVG } from 'assets';
import { SpinnerDots, SpinnerWrapper } from './Spinner.styled';

const Spinner = ({ className }: React.HTMLProps<HTMLDivElement>): JSX.Element => {
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
