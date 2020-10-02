import React from 'react';
import { StyledParagraph } from './Paragraph.styled';

export interface IProps {
  className?: string;
  children: string;
}

const Paragraph = ({ children, className }: IProps): JSX.Element => {
  return <StyledParagraph className={className}>{children}</StyledParagraph>;
};

export default Paragraph;
