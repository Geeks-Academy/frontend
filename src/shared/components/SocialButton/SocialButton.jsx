import React from 'react'
import { Button, Paragraph } from './SocialButton.styled';
import { ReactComponent as GithubLogo } from '../../images/github-logo.svg';
import { ReactComponent as GoogleLogo } from '../../images/google-logo.svg';

const SocialButton = ({ logo, text }) => {
  return (
    <Button>
      {logo === 'github' && <GithubLogo />}
      {logo === 'google' && <GoogleLogo />}
      <Paragraph>{text}</Paragraph>
    </Button>
  )
}

export default SocialButton;
