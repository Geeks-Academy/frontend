import styled from 'styled-components';
import colors from 'styles/colors';
import typography from 'styles/typography';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLine = styled.div<{ done?: boolean }>`
  width: 100px;
  height: 5px;
  background: ${({ done }) => (done ? colors.background.Primary40 : colors.background.Neutral80)};
`;

export const StyledNumber = styled.div<{ done?: boolean }>`
  ${typography.body.bold.L}
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ done }) => (done ? colors.background.Primary40 : colors.background.Neutral80)};
  color: ${({ done }) => (done ? colors.background.NeutralWhite : colors.background.Neutral20)};
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  cursor: ${({ done }) => (done ? 'pointer' : 'not-allowed')};
`;
