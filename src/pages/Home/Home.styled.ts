import styled, { css } from 'styled-components';
import colors from 'styles/colors';
import Header from 'components/atoms/Header';
import List from 'components/atoms/List';
import device from 'styles/devices';

export const StyledWrapper = styled.div`
  padding: 0 16px;
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ${device.desktop} {
    flex-direction: row;
  }
`;

export const StyledContainer = styled.div`
  max-width: 500px;
  ${device.desktop} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

// I want to overwrite Header - remove same style from core component to check

export const StyledHeading = styled(Header)`
  /* margin: 32px 0; */
  /* text-align: center;
  ${device.desktop} {
  /* text-align: left;
  } */
`;

// I want to overwrite List - remove same style from core component to check

export const StyledList = styled(List)`
  /* margin: 0; */
  /* padding: 0 40px; */
  /* ${device.tablet} {
    padding: 0 0 0 40px;
  }
  ${device.desktop} {
    padding: 0;
  } */
`;

export const StyledParagraph = styled.p`
  margin: 32px 0;
  color: ${colors.text.Neutral20};
  text-align: center;
`;

const buttonsStyle = css`
  flex-direction: row;
  height: auto;
  div:first-child {
    margin-right: 16px;
  }
`;

// Is the possibility another way to set same styles for few views? Something like device.tablet + device.desktop {styles}?

export const StyledButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  ${device.tablet} {
    ${buttonsStyle}
  }
  ${device.desktop} {
    ${buttonsStyle}
  }
`;

export const StyledHomeImg = styled.img`
  display: none;
  ${device.desktop} {
    display: block;
    padding-left: 70px;
    padding-top: 100px;
  }
`;
