import React, { useEffect, useState } from 'react';
import Tag from 'components/atoms/Tag';
import { Tags, TagsEndCounter, TagsLabel, TagsWrapper } from './CourseTags.styled';
import { IProps } from './CourseTags.model';

const CourseTags = ({ tags }: IProps): JSX.Element => {
  let tagsWidthSummary = 0;
  const containerWidth = 300;
  let outTags = 0;
  const [moreTags, setMoreTags] = useState(outTags);
  const [showTags, setShowTags] = useState(false);
  const [tagsToRender, setTagsToRender] = useState<any>(null);
  const tagsToShow: any = tags.map((tag: { label: string; fontColor: string; bgColor: string }) =>
    tagsWidthSummary < containerWidth ? (
      <Tag bgColor={tag.bgColor} fontColor={tag.fontColor} key={`tag-${tag.label}`}>
        {console.log('render ')}
        {tag.label}
      </Tag>
    ) : (
      <>{console.log('Add to +more counter')}</>
    )
  );

  const getWidth = (width: number): void => {
    tagsWidthSummary += width;
    console.log(`${tagsWidthSummary} tags summary`);
    if (tagsWidthSummary > containerWidth) {
      outTags += 1;
      tagsToShow.pop();
      console.log(tagsToShow);
      setTimeout(() => {
        setTagsToRender(tagsToShow.slice(0, tagsToShow.length - 1));
        setMoreTags(outTags);
        setShowTags(true);
      }, 10);
    }
  };
  useEffect(() => {
    const tagsToCount = tags.map((tag: { label: string; fontColor: string; bgColor: string }) =>
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
        <>{console.log('Add to +more counter')}</>
      )
    );
    setTagsToRender(tagsToCount);
    // eslint-disable-next-line
  }, [tags, tagsWidthSummary]);

  return (
    <TagsWrapper>
      <TagsLabel>Tags:</TagsLabel>
      <Tags show={showTags}>{tagsToRender}</Tags>
      <TagsEndCounter>+{moreTags} more</TagsEndCounter>
    </TagsWrapper>
  );
};

export default CourseTags;
