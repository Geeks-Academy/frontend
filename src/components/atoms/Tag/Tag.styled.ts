import styled from 'styled-components';
import typography from 'styles/typography';

export const TagElement = styled.div<{ fontColor?: string; bgColor?: string }>`
  display: inline-block;
  margin: 0px 3px;
  padding: 4px 8px;
  border-radius: 4px;
  ${typography.body.S};
  background-color: ${(props) => props.bgColor || 'rgba(95, 236, 152, 0.2)'};
  color: ${(props) => props.fontColor || 'rgba(0, 102, 41, 0.7)'};
`;
