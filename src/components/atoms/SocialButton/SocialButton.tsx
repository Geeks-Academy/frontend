import React from 'react';
import { GithubLogo, GoogleLogo } from 'assets';
import { SocialButtonParagraph, SocialButtonStyled } from './SocialButton.styled';
import { Logo, Role } from './SocialButton.model';

export interface IProps {
  logo: Logo;
  roleDependText: Role;
  className?: string;
}

const SocialButton = ({ className, logo, roleDependText }: IProps): JSX.Element => {
  return (
    <div>
      <SocialButtonStyled className={className}>
        {logo === Logo.GITHUB && <GithubLogo />}
        {logo === Logo.GOOGLE && <GoogleLogo />}
        <SocialButtonParagraph>{roleDependText}</SocialButtonParagraph>
      </SocialButtonStyled>
    </div>
  );
};

export default SocialButton;
