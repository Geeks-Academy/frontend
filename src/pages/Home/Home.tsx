import React from 'react';
import HeroImage from 'assets/hero.svg';
import SocialButton from 'components/atoms/SocialButton';
import listItemIcon from 'assets/listItemIcon.svg';
import { Logo, Role } from 'components/atoms/SocialButton/SocialButton.model';
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

// StyledContainer can will be tag as "section" ?

const Home = (): JSX.Element => (
  <StyledWrapper>
    <main>
      <StyledInnerWrapper>
        <StyledContainer>
          <StyledHeading title={data.header} />
          <StyledList icon={listItemIcon} items={data.listDescription} />
          <StyledParagraph>{data.paragraph}</StyledParagraph>
          <StyledButtonsWrapper>
            <SocialButton logo={Logo.GITHUB} roleDependText={Role.DEVELOPER} />
            <SocialButton logo={Logo.GOOGLE} roleDependText={Role.NONDEVELOPER} />
          </StyledButtonsWrapper>
        </StyledContainer>
        <StyledHomeImg src={HeroImage} alt="Hero image" />
      </StyledInnerWrapper>
    </main>
  </StyledWrapper>
);

export default Home;
