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
  icon: Icon,
  iconPos = null,
  type,
  variant,
  onClick,
}: IButton): JSX.Element => {
  const content = () => {
    if (Icon && iconPos) {
      return (
        <div>
          <ButtonIcon variant={variant} iconPos={iconPos}>
            <Icon />
          </ButtonIcon>
          <span>{children}</span>
        </div>
      );
    }
    return <span>{children}</span>;
  };
  switch (variant) {
    case 'outline':
      return (
        <OutlineButton data-testid="outline" className={className} type={type} iconPos={iconPos}>
          {content()}
        </OutlineButton>
      );
    case 'disabled':
      return (
        <DisableButton data-testid="disabled" className={className} type={type} iconPos={iconPos}>
          {content()}
        </DisableButton>
      );
    case 'transparent':
      return (
        <TransparentButton
          data-testid="transparent"
          className={className}
          type={type}
          iconPos={iconPos}
        >
          {content()}
        </TransparentButton>
      );
    case 'fill':
      return (
        <FillButton data-testid="fill" className={className} type={type} iconPos={iconPos}>
          {content()}
        </FillButton>
      );
    default:
      return (
        <FillButton
          data-testid="fill"
          className={className}
          type={type}
          iconPos={iconPos}
          onClick={onClick}
        >
          {content()}
        </FillButton>
      );
  }
};

export default Button;
