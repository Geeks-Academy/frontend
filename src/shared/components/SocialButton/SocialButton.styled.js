import styled from 'styled-components';
import typography from '../../styles/typography';
import colors from '../../styles/colors';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  padding: 14px 24px;
  border: 1px solid ${colors.background.Neutral80};
  box-shadow: 0px 4px 8px rgba(232, 234, 238, 0.1), 0px 8px 16px rgba(232, 234, 238, 0.2);
  border-radius: 50px;
  ${typography.body.bold.L}
  color: ${colors.text.Neutral60};
  background-color: ${colors.background.NeutralWhite};
  cursor: pointer;
  &:hover {
    background-color: ${colors.background.Neutral80}
  }
`;

export const Paragraph = styled.p`
  margin: 0px 0px 0px 14px;
`;
