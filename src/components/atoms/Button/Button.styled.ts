import styled from 'styled-components';
import typography from 'styles/typography';
import colors from 'styles/colors';
import { ButtonType, IconPosition } from './Button.model';

const BaseButton = styled.button<{ iconPos: IconPosition }>`
  padding: 14px 24px;
  border-radius: 6px;
  border: none;
  ${typography.body.bold.L}
  display: flex;
  align-items: center;
  font-weight: 600;
  outline: none;
  flex-direction: ${({ iconPos }) => (iconPos === 'right' ? 'row-reverse' : 'row')};
`;

export const FillButton = styled(BaseButton)`
  background-color: ${colors.background.Primary40};
  color: ${colors.text.Primary20};
`;

export const OutlineButton = styled(BaseButton)`
  background-color: ${colors.background.NeutralWhite};
  color: ${colors.text.Primary40};
  position: relative;
  ::after {
    content: '';
    position: absolute;
    z-index: 2;
    left: 0px;
    top: 0px;
    padding: -1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-radius: 6px;
    border: 1px solid ${colors.text.Primary40};
    background: transparent;
  }
`;

export const DisableButton = styled(BaseButton)`
  background-color: ${colors.background.Neutral80};
  color: ${colors.background.Neutral40};
`;

export const TransparentButton = styled(BaseButton)`
  background: transparent;
  color: ${colors.text.Primary40};
`;

const setIconPosition = (pos: IconPosition) => {
  switch (pos) {
    case 'left':
      return '0 14px 0 0';
    case 'right':
      return '0 0 0 14px';
    default:
      return '0';
  }
};

const setBackgroundColor = (type: ButtonType): string => {
  switch (type) {
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

export const ButtonIcon = styled.div<{ type: ButtonType; iconPos: IconPosition }>`
  svg {
    width: 24px;
    height: 24px;
    margin: ${({ iconPos }) => setIconPosition(iconPos)};
    path {
      fill: ${({ type }) => setBackgroundColor(type)};
    }
  }
`;
