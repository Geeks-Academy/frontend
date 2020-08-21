import React from 'react'
import { SocialButtonStyled, SocialButtonParagraph } from './SocialButton.styled';
import {ReactComponent as GithubLogo } from '../../images/github-logo.svg';
import {ReactComponent as GoogleLogo } from '../../images/google-logo.svg';

const SocialButton = (props) => {
  return (
    <div>
      <SocialButtonStyled>
      {props.logo === 'github' && <GithubLogo/>}
      {props.logo === 'google' && <GoogleLogo/>}
      <SocialButtonParagraph>
        {props.text}
      </SocialButtonParagraph>
      </SocialButtonStyled>
    </div>
  )
}

export default SocialButton;
