import React from 'react';
import { IProps } from './CourseList.model';
import { Container, CourseWrapper, Line } from './CourseList.styled';
import CourseElement from './CourseElement';

const CourseList = ({ courses }: IProps): JSX.Element => {
  const lastIndex = courses.length - 1;
  return (
    <div>
      {courses.map((course, index) => (
        <Container>
          <CourseWrapper key={course.id}>
            <CourseElement {...course} tags={course.tags} />
          </CourseWrapper>
          {index !== lastIndex && <Line />}
        </Container>
      ))}
    </div>
  );
};

export default CourseList;
