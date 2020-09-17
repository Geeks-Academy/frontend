import styled from 'styled-components';
import colors from 'styles/colors';
import typography from 'styles/typography';

export const ToastContent = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  border: solid 1px ${colors.background.Neutral80};
  background-color: ${colors.background.NeutralWhite};
  height: 71px;
  min-width: 328px;
  max-width: 550px;
  box-sizing: border-box;
  div {
    display: flex;
    flex-direction: column;
  }
`;

export const ToastIconWrapper = styled.div`
  height: 24px;
  width: 24px;
  margin: 24px;
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ToastHeader = styled.div`
  ${typography.body.L};
  margin-top: 14px;
`;

export const ToastInfo = styled.div`
  ${typography.body.M};
  color: ${colors.text.Neutral20};
  margin-bottom: 14px;
`;
