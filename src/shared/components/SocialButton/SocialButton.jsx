import React from 'react'
import { SocialButtonStyled } from './SocialButtonStyles';
import GithubLogo from '../../images/github-logo.svg';

const SocialButton = () => {
  return (
    <div>
      <GithubLogo/>
      <SocialButtonStyled />
    </div>
  )
}

export default SocialButton;
