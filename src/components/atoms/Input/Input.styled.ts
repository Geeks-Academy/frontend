import styled from 'styled-components';
import colors from 'styles/colors';
import typography from 'styles/typography';

export const Container = styled.div`
  max-width: 328px;
`;

export const InputWrapper = styled.div`
  height: 52px;
  padding: 14px 14px 14px 24px;
  border-radius: 4px;
  border: 1px solid ${colors.background.Neutral80};
  background: ${colors.background.NeutralWhite};
  display: flex;
  align-items: center;
  position: relative;
`;

export const StyledInput = styled.input<{ isIcon: boolean }>`
  outline: 0;
  border: none;
  width: ${({ isIcon }) => (isIcon ? '90%' : '100%')};
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
