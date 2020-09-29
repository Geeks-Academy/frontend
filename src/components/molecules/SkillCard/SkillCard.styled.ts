import styled from 'styled-components';
import colors from 'styles/colors';
import { LevelRange } from 'components/atoms/Ranges';
import Paragraph from 'components/atoms/Paragraph';
import { CheckedOptionIcon } from 'assets';

export const StyledSkillCard = styled.div`
  width: 328px;
  height: 145px;
  border-radius: 4px;
  border: 2px solid ${colors.background.Neutral80};
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
  color: ${colors.background.Neutral20};
  font-size: 15px;
  margin: 0;
`;

export const StyledContent = styled(Paragraph)`
  color: ${colors.background.Neutral40};
  font-size: 15px;
  margin: 0;
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
