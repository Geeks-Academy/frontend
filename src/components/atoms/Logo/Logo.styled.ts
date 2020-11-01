import styled from 'styled-components';
import { IProps } from './Logo.model';

const setWidth = ({ logoOnly, textPlacement }: IProps) => {
  if (logoOnly) {
    return '56.7px';
  }
  if (textPlacement === 'vertical') {
    return '306px';
  }
  return '377px';
};

export const LogoWrapper = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  margin: 28.35px;
  width: ${(props: IProps) => setWidth(props)};
`;

export const StyledLogoText = styled.svg`
  width: 306px;
  height: 50px;
  g {
    transform: translateX(-23%);
  }
`;
export const StyledLogo = styled.svg`
  align-self: center;
  margin-bottom: 28.35px;
  width: 56.7px;
  height: 56.7px;
`;
