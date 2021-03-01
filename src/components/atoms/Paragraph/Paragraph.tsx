import React from 'react';
import { StyledParagraph } from './Paragraph.styled';

export interface IProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    React.RefAttributes<HTMLParagraphElement> {}

const Paragraph = ({ children, ...props }: IProps): JSX.Element => {
  return <StyledParagraph {...props}>{children}</StyledParagraph>;
};

export default Paragraph;
