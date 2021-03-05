import React from 'react';

import CourseTags from 'components/molecules/CourseTags';
import { useTextClip } from 'hooks';
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
  recommendation = false,
  releaseDate,
  ...props
}: IProps): JSX.Element => {
  const descriptionText = useTextClip(description);

  return (
    <StyledCourseElement {...props}>
      <StyledCourseImageWrapper>
        <img src={image} alt="Course Logo" />
        <StyledCourseLevel>{level}</StyledCourseLevel>
      </StyledCourseImageWrapper>
      <StyledCourseInfo>
        <StyledHeader>{descriptionText}</StyledHeader>
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
        {recommendation && (
          <ScoreText>
            Recommended by <span>senior</span>
          </ScoreText>
        )}
      </ScoreCard>
    </StyledCourseElement>
  );
};

export default CourseElement;
