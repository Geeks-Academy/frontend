import React from 'react';
import { CheckedOptionIcon } from 'assets/svg';
import { ISkillCard } from './SkillCard.model';
import {
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
        <CheckedOptionIcon />
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
