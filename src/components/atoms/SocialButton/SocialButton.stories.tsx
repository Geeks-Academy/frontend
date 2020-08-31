import React from 'react';
import SocialButton from './SocialButton';
import { Logo, Role } from './SocialButton.model';

export default {
  title: 'atoms/SocialButton',
  component: SocialButton,
};

export const GoogleButton = (): JSX.Element => (
  <SocialButton logo={Logo.GOOGLE} roleDependText={Role.NONDEVELOPER} />
);

export const GithubButton = (): JSX.Element => (
  <SocialButton logo={Logo.GITHUB} roleDependText={Role.DEVELOPER} />
);
