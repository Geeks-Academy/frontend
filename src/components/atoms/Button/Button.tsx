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
  icon: Icon,
  iconPos = null,
  onClick,
  filled,
  outline,
  disabled,
  transparent,
  ...props
}: IButton): JSX.Element => {
  const content = () => {
    if (Icon && iconPos) {
      return (
        <div>
          <ButtonIcon
            iconPos={iconPos}
            filled={!!filled}
            outline={!!outline}
            transparent={!!transparent}
          >
            <Icon />
          </ButtonIcon>
          <span>{children}</span>
        </div>
      );
    }
    return <span {...props}>{children}</span>;
  };

  if (outline) {
    return (
      <OutlineButton data-testid="outline" iconPos={iconPos} onClick={onClick}>
        {content()}
      </OutlineButton>
    );
  }

  if (transparent) {
    return (
      <TransparentButton data-testid="transparent" iconPos={iconPos} onClick={onClick}>
        {content()}
      </TransparentButton>
    );
  }

  if (disabled) {
    return (
      <DisableButton data-testid="disabled" iconPos={iconPos}>
        {content()}
      </DisableButton>
    );
  }

  return (
    <FillButton data-testid="fill" iconPos={iconPos} onClick={onClick}>
      {content()}
    </FillButton>
  );
};

export default Button;
