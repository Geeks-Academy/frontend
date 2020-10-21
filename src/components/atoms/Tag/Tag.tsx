import React from 'react';
import { TagElement } from './Tag.styled';
import { IProps } from './Tag.model';

const Tag = ({ children, bgColor, fontColor }: IProps): JSX.Element => {
  return (
    <TagElement bgColor={bgColor} fontColor={fontColor}>
      {children}
    </TagElement>
  );
};

export default Tag;
