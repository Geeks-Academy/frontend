import React from 'react';
import { IButton } from './Button.model';
import {
  ButtonIcon,
  DisableButton,
  FillButton,
  OutlineButton,
  TransparentButton,
} from './Button.styled';

const Button = ({ children, icon: Icon, iconPos = null, type = 'fill' }: IButton): JSX.Element => {
  const content = () => {
    if (Icon && iconPos) {
      return (
        <div>
          <ButtonIcon type={type} iconPos={iconPos}>
            <Icon />
          </ButtonIcon>
          <span>{children}</span>
        </div>
      );
    }
    return <span>{children}</span>;
  };
  switch (type) {
    case 'outline':
      return (
        <OutlineButton data-testid="outline" iconPos={iconPos}>
          {content()}
        </OutlineButton>
      );
    case 'disabled':
      return (
        <DisableButton data-testid="disabled" iconPos={iconPos}>
          {content()}
        </DisableButton>
      );
    case 'transparent':
      return (
        <TransparentButton data-testid="transparent" iconPos={iconPos}>
          {content()}
        </TransparentButton>
      );
    case 'fill':
      return (
        <FillButton data-testid="fill" iconPos={iconPos}>
          {content()}
        </FillButton>
      );
    default:
      return (
        <FillButton data-testid="fill" iconPos={iconPos}>
          {content()}
        </FillButton>
      );
  }
};

export default Button;
