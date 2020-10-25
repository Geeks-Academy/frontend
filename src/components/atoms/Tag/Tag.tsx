import React from 'react';
import { TagElement } from './Tag.styled';
import { IProps } from './Tag.model';

const Tag = ({ children, bgColor, fontColor, forwardRef }: IProps): JSX.Element => {
  return (
    <TagElement ref={forwardRef} bgColor={bgColor} fontColor={fontColor}>
      {children}
    </TagElement>
  );
};

export default Tag;
