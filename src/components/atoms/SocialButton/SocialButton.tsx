import React from 'react';
import { GithubLogo, GoogleLogo } from 'assets/svg';
import { IAttributes } from 'types/interfaces';
import { SocialButtonParagraph, SocialButtonStyled } from './SocialButton.styled';
import { DefaultLogo, DefaultRole, Logo, Role } from './SocialButton.model';

export interface IProps extends IAttributes<HTMLButtonElement> {
  logo?: Logo;
  userRole?: Role;
}

const SocialButton = ({ logo, userRole, onClick, ...props }: IProps): JSX.Element => {
  return (
    <SocialButtonStyled onClick={onClick} {...props}>
      {logo === DefaultLogo.GITHUB && <GithubLogo />}
      {logo === DefaultLogo.GOOGLE && <GoogleLogo />}
      {userRole === 'developer' && (
        <SocialButtonParagraph>{DefaultRole.DEVELOPER}</SocialButtonParagraph>
      )}
      {userRole === 'non-developer' && (
        <SocialButtonParagraph>{DefaultRole.NONDEVELOPER}</SocialButtonParagraph>
      )}
    </SocialButtonStyled>
  );
};

export default SocialButton;
