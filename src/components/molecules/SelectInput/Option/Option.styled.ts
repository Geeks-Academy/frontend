import styled from 'styled-components';
import typography from 'styles/typography';
import colors from 'styles/colors';

export const StyledOption = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 24px;
  height: 24px;
  cursor: pointer;

  svg {
    margin-right: 14px;
  }
`;

export const StyledOptionParagraph = styled.p<{ isSelected: boolean }>`
  ${typography.body.M};
  color: ${({ isSelected }) =>
    isSelected ? colors.background.Neutral20 : colors.background.Neutral40};
  pointer-events: none;
`;
