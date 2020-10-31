import React from 'react';
import { StyledHeader, StyledWrapper } from './GradientBackground.styled';
import { IProps } from './GradientBackground.model';

const GradientBackground = ({ background, gradient, children, ...props }: IProps): JSX.Element => {
  return (
    <StyledHeader background={background} gradient={gradient} {...props}>
      <StyledWrapper>{children}</StyledWrapper>
    </StyledHeader>
  );
};

export default GradientBackground;
