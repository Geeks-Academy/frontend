import styled from 'styled-components';
import colors from 'styles/colors';

export const StyledProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledProgressBarItem = styled.div<{ active: boolean; activeBar: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: ${colors.background.Neutral80};

  ${({ active }) =>
    active &&
    `
     color: ${colors.text.Primary20};
    background-color: ${colors.background.Primary40};
  `};

  :not(:last-child):before {
    position: absolute;
    content: '';
    right: -300px;
    width: 300px;
    height: 10px;
    background-color: ${colors.background.Neutral80};

    ${({ activeBar }) =>
      activeBar &&
      `
      background-color: ${colors.background.Primary40};
  `};
  }
`;
