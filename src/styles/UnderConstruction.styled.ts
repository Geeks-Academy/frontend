import styled from 'styled-components';

export const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #f9fafa;
`;

export const StyledMainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 192px;
  height: 66px;
  @media (min-width: 768px) {
    width: 317px;
    height: 163px;
  }
  @media (min-width: 1366px) {
    width: 358px;
    height: 179px;
  }
`;

export const StyledHeading = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 135%;
  text-align: center;
  color: #0057ff;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 36px;
  }
  @media (min-width: 1366px) {
    font-size: 48px;
  }
`;

export const StyledParagraph = styled.p`
  font-family: 'Source Code Pro';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 135%;
  text-align: center;
  color: #002fb2;
  margin: 30px 0 20px;
  @media (min-width: 1366px) {
    width: 317px;
  }
`;

export const StyledAnchor = styled.a`
  cursor: pointer;
  svg path {
    fill: #0057ff;
    fill-opacity: 1;
  }
  :hover svg {
    path {
      fill: #002fb2;
    }
  }
`;
