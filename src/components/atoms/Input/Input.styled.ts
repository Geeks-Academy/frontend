import styled from 'styled-components';
import colors from 'styles/colors';
import typography from 'styles/typography';

export const Container = styled.div<{ fullWidth?: boolean }>`
  max-width: ${({ fullWidth }) => (fullWidth ? '' : '328px')};
`;

export const InputWrapper = styled.div<{ fullWidth?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 14px 14px 14px 24px;
  max-width: ${({ fullWidth }) => (fullWidth ? '' : '328px')};
  height: 52px;
  border: 1px solid ${colors.background.Neutral80};
  border-radius: 4px;
  background: ${colors.background.NeutralWhite};
`;

export const StyledInput = styled.input<{ isIcon?: boolean }>`
  outline: 0;
  width: ${({ isIcon }) => (isIcon ? '90%' : '100%')};
  ${typography.body.L}
  border: none;
  color: ${colors.background.Neutral20};
  ::placeholder {
    color: ${colors.background.Neutral40};
  }
`;

export const StyledIcon = styled.div`
  position: absolute;
  right: 14px;
  width: 24px;
  height: 24px;
`;

export const Label = styled.label`
  ${typography.body.XS}
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 0 8px;
  background: ${colors.background.NeutralWhite};
  transform: translate(16px, -8px) scale(1);
  color: ${colors.background.Neutral40};
`;
