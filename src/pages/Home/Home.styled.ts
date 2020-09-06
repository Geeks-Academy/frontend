import styled from 'styled-components';
import colors from 'styles/colors';
import device from 'styles/devices';
import Header from 'components/atoms/Header';
import List from 'components/atoms/List';
import Paragraph from 'components/atoms/Paragraph';

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

export const StyledHeading = styled(Header)`
  margin-bottom: 32px;
  text-align: center;
  ${device.desktop} {
    text-align: left;
  }
`;

export const StyledList = styled(List)`
  padding: 0 40px;
  li:nth-last-of-type(1) {
    margin-bottom: 0;
  }
  ${device.tablet} {
    padding: 0 0 0 25px;
  }
  ${device.desktop} {
    padding: 0;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  margin: 32px 0;
  color: ${colors.text.Neutral20};
  text-align: center;
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  ${device.tablet} {
    flex-direction: row;
    height: auto;
    div:first-child {
      margin-right: 16px;
    }
  }
`;

export const StyledHomeImg = styled.img`
  display: none;
  ${device.desktop} {
    display: block;
    padding-left: 70px;
    padding-top: 70px;
  }
`;
