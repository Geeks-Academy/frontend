import { ReactComponent as GithubLogo } from 'assets/github-logo.svg';
import { ReactComponent as GoogleLogo } from 'assets/google-logo.svg';
import React from 'react';
import SocialButton, { IProps } from './SocialButton';
import { Logo, Role } from './SocialButton.model';

export default {
  title: 'atoms/SocialButton',
  component: SocialButton,
  args: {
    roleDependText: Role.DEVELOPER || Role.NONDEVELOPER,
    logo: GoogleLogo || GithubLogo,
  },
  argTypes: {
    roleDependText: {
      control: {
        type: 'text',
      },
    },
    logo: {
      control: {
        type: Logo,
      },
    },
  },
};

export const GoogleButton = ({ logo, roleDependText }: IProps): JSX.Element => (
  <SocialButton logo={logo} roleDependText={roleDependText} />
);

export const GithubButton = ({ logo, roleDependText }: IProps): JSX.Element => (
  <SocialButton logo={logo} roleDependText={roleDependText} />
);
