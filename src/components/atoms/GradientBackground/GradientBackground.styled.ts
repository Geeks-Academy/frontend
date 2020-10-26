import styled from 'styled-components';

export const StyledHeader = styled.div<{ background: string; gradient: string }>`
  position: relative;
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
    background: ${({ gradient }) => `linear-gradient(${gradient})`};
  }
`;

export const StyledWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
`;
