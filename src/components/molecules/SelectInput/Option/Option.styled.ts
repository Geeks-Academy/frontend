import styled from 'styled-components';
import typography from 'styles/typography';
import colors from 'styles/colors';
import { CheckedOptionIcon, UnCheckedOptionIcon } from 'assets';

export const StyledOption = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 24px;
  margin-bottom: 24px;
  cursor: pointer;
`;

export const StyledOptionParagraph = styled.p`
  ${typography.body.M};
  color: ${colors.background.Neutral40};
  pointer-events: none;
`;

export const StyledUnCheckedOptionIcon = styled(UnCheckedOptionIcon)`
  margin-right: 14px;
`;

export const StyledCheckedOptionIcon = styled(CheckedOptionIcon)`
  margin-right: 14px;
`;
