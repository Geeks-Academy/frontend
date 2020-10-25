import React from 'react';
import Tag from 'components/atoms/Tag';
import { Tags, TagsEndCounter, TagsLabel, TagsWrapper } from './CourseTags.styled';
import { IProps } from './CourseTags.model';
import { defaultTagsData } from './defaultTags';

const CourseTags = ({ tags }: IProps): JSX.Element => {
  const getWidth = (element: any) => {
    if (element) {
      return parseInt(element.getBoundingClientRect().width, 10);
    }
    return null;
  };
  const refWidthCount = (element: any, place: string) => {
    if (!element) {
      return;
    }
    if (place === 'tagsPlace') {
      console.log(getWidth(element));
    } else {
      console.log(getWidth(element));
    }
  };

  return (
    <TagsWrapper>
      <TagsLabel>Tags:</TagsLabel>
      <Tags ref={(element) => refWidthCount(element, 'tagsPlace')}>
        {tags.map((tag) =>
          defaultTagsData[tag] ? (
            <Tag
              forwardRef={(element: any) => refWidthCount(element, 'tag')}
              bgColor={defaultTagsData[tag].bgColor}
              fontColor={defaultTagsData[tag].fontColor}
              key={`tag-${defaultTagsData[tag].label}`}
            >
              {defaultTagsData[tag].label}
            </Tag>
          ) : (
            <Tag forwardRef={(element: any) => refWidthCount(element, 'tag')} key={`tag-${tag}`}>
              {tag}
            </Tag>
          )
        )}
      </Tags>
      <TagsEndCounter>+4 more</TagsEndCounter>
    </TagsWrapper>
  );
};

export default CourseTags;
