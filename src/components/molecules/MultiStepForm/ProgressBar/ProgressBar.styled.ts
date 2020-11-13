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
    top: 14px;
    right: 0;

    z-index: -1;

    width: 100%;
    height: 6px;
    background-color: ${colors.background.Primary60};

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
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50px;
  background-color: ${colors.background.Primary60};
  color: ${colors.text.Primary20};
  font-weight: bold;
  ${({ active }) =>
    active &&
    `

    background-color: ${colors.background.Primary40};
  `};
`;
