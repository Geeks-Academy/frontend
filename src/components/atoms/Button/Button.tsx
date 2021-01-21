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
  onClick,
  isFill,
  isOutline,
  isDisabled,
  isTransparent,
}: IButton): JSX.Element => {
  const content = () => {
    if (Icon && iconPos) {
      return (
        <div>
          <ButtonIcon
            iconPos={iconPos}
            isFill={!!isFill}
            isOutline={!!isOutline}
            isTransparent={!!isTransparent}
          >
            <Icon />
          </ButtonIcon>
          <span>{children}</span>
        </div>
      );
    }
    return <span>{children}</span>;
  };

  if (isOutline) {
    return (
      <OutlineButton
        data-testid="outline"
        className={className}
        iconPos={iconPos}
        onClick={onClick}
      >
        {content()}
      </OutlineButton>
    );
  }

  if (isTransparent) {
    return (
      <TransparentButton
        data-testid="transparent"
        className={className}
        iconPos={iconPos}
        onClick={onClick}
      >
        {content()}
      </TransparentButton>
    );
  }

  if (isDisabled) {
    return (
      <DisableButton data-testid="disabled" className={className} iconPos={iconPos}>
        {content()}
      </DisableButton>
    );
  }

  return (
    <FillButton data-testid="fill" className={className} iconPos={iconPos} onClick={onClick}>
      {content()}
    </FillButton>
  );
};

export default Button;
