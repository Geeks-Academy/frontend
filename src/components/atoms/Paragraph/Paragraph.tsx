import React from 'react';

import { StyledParagraph } from './Paragraph.styled';

export interface IProps {
  txt: string;
  className?: string;
}

const Paragraph = ({ txt, className }: IProps): JSX.Element => {
  return <StyledParagraph className={className}>{txt}</StyledParagraph>;
};

export default Paragraph;
