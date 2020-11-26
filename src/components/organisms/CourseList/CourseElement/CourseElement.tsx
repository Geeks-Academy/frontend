import React from 'react';

import CourseTags from 'components/molecules/CourseTags';
import { IProps } from './CourseElement.model';
import {
  CourseDetails,
  Score,
  ScoreCard,
  ScoreText,
  StyledCourseElement,
  StyledCourseImageWrapper,
  StyledCourseInfo,
  StyledCourseLevel,
  StyledHeader,
} from './CourseElement.styled';

const CourseElement = ({
  author,
  level,
  image,
  description,
  price,
  score,
  tags,
  recommendation,
  releaseDate,
}: IProps): JSX.Element => {
  const renderDescription = (descriptionText: string): string => {
    const maxChar = 70;
    if (descriptionText.length > maxChar) {
      descriptionText = `${descriptionText.substring(0, maxChar)}...`;
    }
    return descriptionText;
  };

  return (
    <StyledCourseElement>
      <StyledCourseImageWrapper>
        <img src={image} alt="Course Logo" />
        <StyledCourseLevel>{level}</StyledCourseLevel>
      </StyledCourseImageWrapper>
      <StyledCourseInfo>
        <StyledHeader>{renderDescription(description)}</StyledHeader>
        <CourseDetails>
          <span>Author: {author}</span>
          <span>Release date: {releaseDate.toLocaleDateString()}</span>
          <span>Price: {price}$</span>
        </CourseDetails>
        <div>
          <CourseTags tags={tags} />
        </div>
      </StyledCourseInfo>
      <ScoreCard>
        <ScoreText>Total score</ScoreText>
        <Score>{`${score} / 10`}</Score>
        <ScoreText>
          Recommended by <span>{recommendation}</span>
        </ScoreText>
      </ScoreCard>
    </StyledCourseElement>
  );
};

export default CourseElement;
