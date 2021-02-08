import React from 'react';
import { ISkillCard } from './SkillCard.model';
import {
  StyledCheckedOptionIcon,
  StyledContent,
  StyledLevelRange,
  StyledSkillCard,
  StyledTextWrapper,
  StyledTitle,
  StyledWrapper,
} from './SkillCard.styled';

const SkillCard = ({ title, content, ...props }: ISkillCard): JSX.Element => {
  return (
    <StyledSkillCard {...props}>
      <StyledWrapper>
        <StyledCheckedOptionIcon />
        <StyledTextWrapper>
          <StyledTitle>{title}</StyledTitle>
          <StyledContent>{content}</StyledContent>
        </StyledTextWrapper>
      </StyledWrapper>
      <StyledLevelRange />
    </StyledSkillCard>
  );
};

export default SkillCard;
