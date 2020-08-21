import styled from 'styled-components';
import typography from '../../styles/typography';
import colors from '../../styles/colors';

export const SocialButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  padding: 14px 24px;
  border: 1px solid ${colors.Neutral80Background};
  box-shadow: 0px 4px 8px rgba(232, 234, 238, 0.1), 0px 8px 16px rgba(232, 234, 238, 0.2);
  border-radius: 50px;
  ${typography.bodyLBold}
  color: ${colors.Neutral60Color};
  background-color:${colors.NeutralWhiteBackground};
  cursor: pointer;
  :hover {
    background-color:${colors.Neutral80Background}
  }
`;

export const SocialButtonParagraph = styled.p`
  flex: none;
  order: 1;
  align-self: center;
  margin: 0px 0px 0px 14px;
`;
