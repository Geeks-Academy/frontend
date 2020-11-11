import React from 'react';
import { IButton } from './Button.model';
import {
  ButtonIcon,
  DisableButton,
  FillButton,
  OutlineButton,
  TransparentButton,
} from './Button.styled';

const Button = ({
  children,
  className,
  onClick = () => null,
  icon: Icon,
  iconPos = null,
  type,
}: IButton): JSX.Element => {
  const content = () => {
    if (Icon && iconPos) {
      return (
        <div>
          <ButtonIcon type={type} iconPos={iconPos} onClick={onClick}>
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
        <OutlineButton
          onClick={onClick}
          data-testid="outline"
          className={className}
          iconPos={iconPos}
        >
          {content()}
        </OutlineButton>
      );
    case 'disabled':
      return (
        <DisableButton
          onClick={onClick}
          data-testid="disabled"
          className={className}
          iconPos={iconPos}
        >
          {content()}
        </DisableButton>
      );
    case 'transparent':
      return (
        <TransparentButton
          onClick={onClick}
          data-testid="transparent"
          className={className}
          iconPos={iconPos}
        >
          {content()}
        </TransparentButton>
      );
    case 'fill':
      return (
        <FillButton onClick={onClick} data-testid="fill" className={className} iconPos={iconPos}>
          {content()}
        </FillButton>
      );
    default:
      return (
        <FillButton onClick={onClick} data-testid="fill" className={className} iconPos={iconPos}>
          {content()}
        </FillButton>
      );
  }
};

export default Button;
