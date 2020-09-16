import styled from 'styled-components';
import typography from 'styles/typography';
import colors from 'styles/colors';

export const StyledOption = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const StyledOptionParagraph = styled.p`
  ${typography.body.M};
  color: ${colors.background.Neutral40};
  pointer-events: none;
`;

export const StyledCircle = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  margin-right: 14px;
  pointer-events: none;
`;
