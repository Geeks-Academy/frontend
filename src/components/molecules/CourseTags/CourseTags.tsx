import React, { useState } from 'react';
import Tag from 'components/atoms/Tag';
import { Tags, TagsEndCounter, TagsLabel, TagsWrapper } from './CourseTags.styled';
import { IProps } from './CourseTags.model';

// todo: zrobić listę obiektów zamiast listy propsów
const CourseTags = ({ tags }: IProps): JSX.Element => {
  let tagsWidthSummary = 0;
  const containerWidth = 300;
  const [tagsOutOfPlace, setTagsOutOfPlace] = useState(0);

  const getWidth = (width: number): void => {
    tagsWidthSummary += width;
    // console.log(`${width} current width`);
    // console.log(`${containerWidth} tags place`);
    console.log(`${tagsWidthSummary} tags summary`);
  };

  const renderTags = tags.map((tag: { label: string; fontColor: string; bgColor: string }) =>
    tagsWidthSummary < containerWidth ? (
      <Tag
        getWidth={getWidth}
        bgColor={tag.bgColor}
        fontColor={tag.fontColor}
        key={`tag-${tag.label}`}
      >
        {console.log('render')}
        {tag.label}
      </Tag>
    ) : (
      <>
        {setTagsOutOfPlace(tagsOutOfPlace + 1)}
        {console.log('Add to +more counter')}
      </>
    )
  );
  return (
    <TagsWrapper>
      <TagsLabel>Tags:</TagsLabel>
      <Tags>{renderTags}</Tags>
      <TagsEndCounter>+{tagsOutOfPlace} more</TagsEndCounter>
    </TagsWrapper>
  );
};

export default CourseTags;
