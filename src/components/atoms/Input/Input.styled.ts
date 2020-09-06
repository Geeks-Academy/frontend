import styled from 'styled-components';
import colors from 'styles/colors';
import typography from 'styles/typography';

export const InputWrapper = styled.div`
  box-sizing: border-box;
  height: 52px;
  border-radius: 4px;
  border: 1px solid ${colors.background.Neutral80};
  background: ${colors.background.NeutralWhite};
  display: flex;
  align-items: center;
  position: relative;
`;

export const StyledInput = styled.input<{ icon: any }>`
  outline: none;
  border: none;
  width: ${({ icon }) => (icon ? 'calc(100% - 65px)' : '100%')};
  padding: 14px 14px 14px 24px;
  ${typography.body.L}
`;

export const StyledIcon = styled.div`
  height: 24px;
  width: 24px;
  right: 14px;
  position: absolute;
`;

export const Label = styled.label`
  ${typography.body.M}
  margin-bottom: 4px;
`;
