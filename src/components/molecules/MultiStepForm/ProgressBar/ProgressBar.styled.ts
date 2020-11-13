import styled from 'styled-components';
import colors from 'styles/colors';

export const StyledProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledProgressBarItemWrapper = styled.div<{ activeBar: boolean }>`
  position: relative;

  :not(:last-child) {
    width: 100%;
  }

  :not(:last-child):after {
    position: absolute;
    content: '';
    top: 20px;
    right: 0;

    z-index: -1;

    width: 100%;
    height: 10px;
    background-color: ${colors.background.Neutral80};

    ${({ activeBar }) =>
      activeBar &&
      `
      background-color: ${colors.background.Primary40};
  `};
  }
`;

export const StyledProgressBarItem = styled.button<{ active: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50px;
  background-color: ${colors.background.Neutral80};

  ${({ active }) =>
    active &&
    `
     color: ${colors.text.Primary20};
    background-color: ${colors.background.Primary40};
  `};
`;
