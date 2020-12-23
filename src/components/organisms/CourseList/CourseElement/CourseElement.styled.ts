import styled from 'styled-components';
import Header from 'components/atoms/Header';
import typography from 'styles/typography';
import colors from 'styles/colors';

export const StyledCourseElement = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1016px;
  max-height: 184px;
`;

export const StyledCourseImageWrapper = styled.div`
  position: relative;
  margin-right: 32px;
  background-color: #1cc8ff;
  img {
    max-width: 140px;
    height: 184px;
  }
`;

export const StyledCourseLevel = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 55px;
  border-radius: 0px 0px 4px 4px;
  background-color: rgba(25, 29, 36, 0.15);
  ${typography.body.bold.L}
  color: ${colors.text.Primary20};
  line-height: 55px;
  text-align: center;
`;

export const StyledCourseInfo = styled.div`
  max-width: 500px;
`;

export const StyledHeader = styled(Header)`
  ${typography.header.bold.M}
  margin: 16px 0;
`;

export const ScoreCard = styled.div`
  margin-left: 10%;
  padding: 25px 20px;
  max-width: 208px;
  border: 1px solid rgba(232, 234, 238, 0.75);
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(232, 234, 238, 0.15), 0px 8px 16px rgba(232, 234, 238, 0.25);
  text-align: center;
`;

export const Score = styled(Header)`
  margin: 4px 0;
  width: 100%;
  font-size: 50px;
`;

export const ScoreText = styled.p`
  margin: 0;
  ${typography.body.M}
  color: ${colors.text.Neutral20};
  span {
    font-weight: ${typography.body.bold.M};
  }
`;

export const CourseDetails = styled.div`
  margin: 16px 0;
  span {
    margin-right: 12px;
    ${typography.body.M}
    color: ${colors.text.Neutral20};

    &:last-child {
      margin-right: 0;
    }
  }
`;
