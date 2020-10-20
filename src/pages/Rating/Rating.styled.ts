import styled, { css } from 'styled-components';
import { Logo } from 'assets';
import typography from 'styles/typography';
import colors from 'styles/colors';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';

const flexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const StyledHeader = styled.header<{ background: string }>`
  position: relative;
  width: 100%;
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
    background: linear-gradient(180deg, rgba(0, 105, 227, 0.75) 0%, rgba(0, 76, 163, 0.9) 100%);
  }
`;

export const StyledContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 36px 0 32px 0;
  max-width: 1056px;
  height: 100%;
`;

export const StyledLogo = styled(Logo)`
  width: 264px;
  height: 40px;
`;

export const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Navigation = styled.nav`
  ${flexAlignCenter}
`;

export const NavigationList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;

  li {
    margin-right: 32px;
    a {
      ${typography.body.bold.L}
      color: ${colors.text.Neutral40};
      text-decoration: none;
    }
  }
`;

export const StyledInfo = styled.div`
  ${flexAlignCenter}
  flex-direction: column;
  justify-content: center;
  margin-top: 130px;
`;

export const Title = styled.h1`
  ${typography.header.bold.XXL}
  margin: 0;
  color: ${colors.text.Neutral40};
`;

export const SubTitle = styled.h2`
  ${typography.header.S}
  margin-top: 8px 0 32px 0;
  color: ${colors.text.Neutral40};
`;

export const CourseSearching = styled.div`
  ${flexAlignCenter}
  justify-content: center;
  width: 100%;
  color: ${colors.text.Neutral40};
`;

export const StyledOutlineButton = styled(Button)`
  min-width: 140px;
  border: 1px solid ${colors.text.Neutral40};
  background: transparent;
  cursor: pointer;
  text-align: center;
`;

export const StyledSpan = styled.span`
  ${typography.body.L}
  margin: 0 20px 0 21px;
  color: ${colors.text.Neutral40};
`;

export const SearchCourseInput = styled(Input)`
  margin-right: 16px;
  min-width: 366px;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 130px;
  & > * {
    margin-right: 16px;
    :last-child {
      margin-right: 0;
    }
  }
`;

export const StyledFillButton = styled(Button)`
  cursor: pointer;
`;
