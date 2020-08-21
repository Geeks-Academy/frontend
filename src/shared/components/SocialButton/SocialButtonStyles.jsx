import { bodyLBold } from '../../styles/typography';
import { Neutral60Color, NeutralWhiteBackground, Neutral80Background } from '../../styles/colors';
import styled from 'styled-components'

export const SocialButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  padding: 14px 24px;
  border: 1px solid #E8EAEE;
  box-shadow: 0px 4px 8px rgba(232, 234, 238, 0.1), 0px 8px 16px rgba(232, 234, 238, 0.2);
  border-radius: 50px;
  ${bodyLBold}
  color: ${Neutral60Color};
  background-color:${NeutralWhiteBackground};
  cursor: pointer;
  :hover {
    background-color:${Neutral80Background}
  }
`;

export const SocialButtonParagraph = styled.p`
flex: none;
order: 1;
align-self: center;
margin: 0px 0px 0px 14px;
`;