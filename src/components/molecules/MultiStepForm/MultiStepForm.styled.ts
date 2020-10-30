import styled from 'styled-components';
import colors from '../../../styles/colors';

export const StyledMultiStepForm = styled.div`
  padding: 32px;
  width: min-content;
  border: 2px solid ${colors.background.Neutral80};
  border-radius: 4px;
`;

export const StyledContent = styled.div`
  padding: 16px;
`;

export const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`;
