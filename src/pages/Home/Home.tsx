import React from 'react';
import SocialButton from 'components/atoms/SocialButton';
import { HomePageImg_1, listItemIcon } from 'assets';
import { data } from './data';
import {
  StyledButtonsWrapper,
  StyledContainer,
  StyledHeading,
  StyledHomeImg,
  StyledInnerWrapper,
  StyledList,
  StyledParagraph,
  StyledWrapper,
} from './Home.styled';

// "StyledWrapper - div" and "main" tags in future can use in template and remove from here.

const Home = (): JSX.Element => {
  const handleClick = async () => {
    const a1 = await fetch('auth.programmers.only/auth/github');
    const b1 = await a1.json();
    console.log(b1);
    const a2 = await fetch('/auth.programmers.only/auth/github');
    const b2 = await a2.json();
    console.log(b2);
    const a3 = await fetch('https://auth.programmers.only/auth/github');
    const b3 = await a3.json();
    console.log(b3);
    const a4 = await fetch('http://auth.programmers.only/auth/github');
    const b4 = await a4.json();
    console.log(b4);
  };

  return (
    <StyledWrapper>
      <main>
        <StyledInnerWrapper>
          <StyledContainer>
            <StyledHeading>{data.header}</StyledHeading>
            <StyledList icon={listItemIcon} items={data.listDescription} />
            <StyledParagraph>{data.paragraph}</StyledParagraph>
            <StyledButtonsWrapper>
              <SocialButton logo="github" userRole="developer" onClick={handleClick} />
              <SocialButton logo="google" userRole="non-developer" onClick={handleClick} />
            </StyledButtonsWrapper>
          </StyledContainer>
          <StyledHomeImg src={HomePageImg_1} alt="Register" />
        </StyledInnerWrapper>
      </main>
    </StyledWrapper>
  );
};

export default Home;
