import React from 'react';
import { ISkillCard } from './SkillCard.model';
import {
  StyledCheckedOptionIcon,
  StyledLevelRange,
  StyledParagraph,
  StyledSkillCard,
  StyledTextWrapper,
  StyledTitle,
  StyledWrapper,
} from './SkillCard.styled';

const SkillCard = ({ paragraphText, titleText }: ISkillCard): JSX.Element => {
  return (
    <StyledSkillCard>
      <StyledWrapper>
        <StyledCheckedOptionIcon />
        <StyledTextWrapper>
          <StyledTitle txt={titleText} />
          <StyledParagraph txt={paragraphText} />
        </StyledTextWrapper>
      </StyledWrapper>
      <StyledLevelRange />
    </StyledSkillCard>
  );
};

export default SkillCard;
