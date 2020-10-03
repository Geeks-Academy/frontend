import styled from 'styled-components';
import colors from 'styles/colors';
import typography from 'styles/typography';

export const ToastContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  min-width: 328px;
  max-width: 550px;
  height: 71px;
  border: solid 1px ${colors.background.Neutral80};
  border-radius: 4px;
  background-color: ${colors.background.NeutralWhite};
  div {
    display: flex;
    flex-direction: column;
  }
`;

export const ToastIconWrapper = styled.div`
  margin: 24px;
  width: 24px;
  height: 24px;
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
  margin-bottom: 14px;
  color: ${colors.text.Neutral20};
`;
