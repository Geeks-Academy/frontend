import styled from 'styled-components';
import typography from 'styles/typography';
import colors from 'styles/colors';
import { ButtonVariant, IconPosition } from './Button.model';

const BaseButton = styled.button<{ iconPos: IconPosition }>`
  box-sizing: border-box;
  display: flex;
  padding: 14px 24px;
  height: 52px;
  border: none;
  border-radius: 6px;
  ${typography.body.bold.L};
  outline: none;
  div {
    display: flex;
    flex-direction: ${({ iconPos }) => (iconPos === 'right' ? 'row-reverse' : 'row')};
    align-content: space-between;
    align-items: center;
    height: 24px;
  }
  span {
    height: 24px;
    color: #fff;
  }
`;

export const FillButton = styled(BaseButton)`
  background-color: ${colors.background.Primary40};
  color: ${colors.text.Primary20};
`;

export const OutlineButton = styled(BaseButton)`
  position: relative;
  background-color: ${colors.background.NeutralWhite};
  color: ${colors.text.Primary40};
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    transform: translate(1px);
    border: 1px solid ${colors.text.Primary40};
    border-radius: 6px;
    background: transparent;
  }
  span {
    color: ${colors.text.Primary40};
  }
`;

export const DisableButton = styled(BaseButton)`
  background-color: ${colors.background.Neutral80};
  span {
    color: ${colors.background.Neutral40};
  }
`;

export const TransparentButton = styled(BaseButton)`
  background: transparent;
  span {
    color: ${colors.text.Primary40};
  }
`;

const setIconMargin = (pos: IconPosition) => {
  switch (pos) {
    case 'left':
      return '0 14px 0 0';
    case 'right':
      return '0 0 0 14px';
    default:
      return '0';
  }
};

const setBackgroundColor = (variant: ButtonVariant): string => {
  switch (variant) {
    case 'fill':
      return colors.background.NeutralWhite;
    case 'outline':
      return colors.background.Primary40;
    case 'transparent':
      return colors.background.Primary40;
    default:
      return colors.background.Neutral40;
  }
};

export const ButtonIcon = styled.div<{ variant: ButtonVariant; iconPos: IconPosition }>`
  margin: ${({ iconPos }) => setIconMargin(iconPos)};
  height: 24px;
  svg {
    width: 24px;
    height: 24px;
    path {
      fill: ${({ variant }) => {
        console.log(variant);
        return setBackgroundColor(variant);
      }};
    }
  }
`;
