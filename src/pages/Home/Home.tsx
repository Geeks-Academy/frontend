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

const Home = (): JSX.Element => (
  <StyledWrapper>
    <main>
      <StyledInnerWrapper>
        <StyledContainer>
          <StyledHeading>{data.header}</StyledHeading>
          <StyledList icon={listItemIcon} items={data.listDescription} />
          <StyledParagraph>{data.paragraph}</StyledParagraph>
          <StyledButtonsWrapper>
            <SocialButton logo="github" userRole="developer" />
            <SocialButton logo="google" userRole="non-developer" />
          </StyledButtonsWrapper>
        </StyledContainer>
        <StyledHomeImg src={HomePageImg_1} alt="Register" />
      </StyledInnerWrapper>
    </main>
  </StyledWrapper>
);

export default Home;
