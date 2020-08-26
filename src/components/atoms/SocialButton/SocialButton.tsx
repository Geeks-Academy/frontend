import React from 'react';
import { ReactComponent as GithubLogo } from 'assets/github-logo.svg';
import { ReactComponent as GoogleLogo } from 'assets/google-logo.svg';
import { SocialButtonParagraph, SocialButtonStyled } from './SocialButton.styled';
import { Logo, Role } from './SocialButton.model';

interface IProps {
  logo: Logo;
  text: Role;
}

const SocialButton = ({ logo, text }: IProps) => {
  return (
    <div>
      <SocialButtonStyled>
        {logo === Logo.GITHUB && <GithubLogo />}
        {logo === Logo.GOOGLE && <GoogleLogo />}
        <SocialButtonParagraph>{text}</SocialButtonParagraph>
      </SocialButtonStyled>
    </div>
  );
};

export default SocialButton;
