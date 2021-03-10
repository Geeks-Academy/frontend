import styled, { keyframes } from 'styled-components';
import colors from 'styles/colors';

const dotPulsing = keyframes`
  0%, 50% {
    transform: scale(1);
    background-color: ${colors.background.Neutral80};
  }
  25% {
    transform: scale(1.5);
    background-color: ${colors.background.Primary20};

  }
`;

const leftBracketAnimation = keyframes`
  0% {
    transform: translateX(20px)
  }
  100% {
    transform: translateX(0px)
  }
`;

const rightBracketAnimation = keyframes`
  0% {
    transform: translateX(-20px)
  }
  100% {
  transform: translateX(0px)
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  .bracketLeft {
    animation: ${leftBracketAnimation} 0.3s linear;
  }
  .bracketRight {
    animation: ${rightBracketAnimation} 0.3s linear;
  }
`;

export const SpinnerDots = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  .spinnerDot {
    margin: 6px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    animation: ${dotPulsing} 0.9s linear infinite;
    :nth-child(1) {
      animation-delay: 0.6s;
    }
    :nth-child(3) {
      animation-delay: 0.3s;
    }
  }
`;
