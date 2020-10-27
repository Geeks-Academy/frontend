import styled from 'styled-components';
import { GradientType } from './GradientBackground.model';

const setGradient = ({ angle, colors }: GradientType): string => {
  if (angle) {
    return `linear-gradient(${angle}, ${[...colors]})`;
  }
  return `linear-gradient(${[...colors]})`;
};

export const StyledHeader = styled.div<{ background: string; gradient?: GradientType }>`
  position: relative;
  height: 594px;
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-size: cover;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ gradient }) => (gradient ? setGradient(gradient) : 'none')};
  }
`;

export const StyledWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
`;
