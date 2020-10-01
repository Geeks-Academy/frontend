import styled from 'styled-components';
import colors from 'styles/colors';
import { LevelRange } from 'components/atoms/Ranges';
import Paragraph from 'components/atoms/Paragraph';
import { CheckedOptionIcon } from 'assets';

export const StyledSkillCard = styled.div`
  width: 328px;
  height: 145px;
  border: 2px solid ${colors.background.Neutral80};
  border-radius: 4px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 14px 0;
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledTitle = styled(Paragraph)`
  margin: 0;
  color: ${colors.background.Neutral20};
  font-size: 15px;
`;

export const StyledContent = styled(Paragraph)`
  margin: 0;
  color: ${colors.background.Neutral40};
  font-size: 15px;
`;

export const StyledCheckedOptionIcon = styled(CheckedOptionIcon)`
  margin: 0 14px 0 24px;
`;

export const StyledLevelRange = styled(LevelRange)`
  height: 61px;
  label,
  datalist {
    width: 280px;
  }

  input {
    width: 280px;
  }
  option {
    width: 70px;
    ::before {
      width: 70px;
    }
  }
`;
