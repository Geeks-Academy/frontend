import React from 'react';
import { StyledParagraph } from './Paragraph.styled';

export interface IProps extends React.HTMLProps<HTMLParagraphElement> {
  children: string;
}

const Paragraph = ({ children, className }: IProps): JSX.Element => {
  return <StyledParagraph className={className}>{children}</StyledParagraph>;
};

export default Paragraph;
