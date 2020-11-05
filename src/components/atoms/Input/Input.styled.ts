import styled from 'styled-components';
import colors from 'styles/colors';
import typography from 'styles/typography';

export const Container = styled.div`
  max-width: 328px;
`;

export const StyledInput = styled.input<{ isIcon: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 14px 14px 14px 24px;
  width: ${({ isIcon }) => (isIcon ? '90%' : '100%')};
  height: 52px;
  border: 1px solid ${colors.background.Neutral80};
  border-radius: 4px;
  background: ${colors.background.NeutralWhite};
  outline: 0;
  ${typography.body.L};
  color: ${colors.background.Neutral20};
  ::placeholder {
    color: ${colors.background.Neutral40};
  }
`;

export const StyledError = styled.span`
  color: ${colors.background.Error60};
`;

export const StyledIcon = styled.div`
  position: absolute;
  right: 14px;
  width: 24px;
  height: 24px;
`;

export const Label = styled.label`
  ${typography.body.M};
  margin-bottom: 4px;
  color: ${colors.background.Neutral20};
`;
