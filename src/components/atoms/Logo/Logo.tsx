import React from 'react';
import { LogoIcon, LogoText } from 'assets';
import { IProps } from './Logo.model';
import { LogoWrapper, StyledLogo, StyledLogoText } from './Logo.styled';

const Logo = ({ logoOnly = false, textPlacement = 'horizontal' }: IProps): JSX.Element => {
  const renderLogo = () => {
    if (logoOnly) {
      return (
        <svg width="58" height="58">
          <LogoIcon />
        </svg>
      );
    }
    if (textPlacement === 'horizontal') {
      return (
        <svg width="377" height="58">
          <LogoText />
          <LogoIcon />
        </svg>
      );
    }
    return (
      <>
        <StyledLogo>
          <LogoIcon />
        </StyledLogo>
        <StyledLogoText>
          <LogoText />
        </StyledLogoText>
      </>
    );
  };

  return (
    <LogoWrapper textPlacement={textPlacement} logoOnly={logoOnly}>
      {renderLogo()}
    </LogoWrapper>
  );
};

export default Logo;
