import React from 'react'
import { IButton, EIconPosition } from './Button.model';
import {
  FillButton,
  OutlineButton,
  DisableButton,
  TransparentButton,
  createIcon
} from './Button.styled';

const Button = ({
  children,
  icon: Icon = undefined,
  iconPos = EIconPosition.NONE,
  type = 'fill'
}: IButton) => {
  const StyledIcon = createIcon(Icon);

  const content = () => {
    if (Icon && iconPos !== EIconPosition.NONE) {
      return (
        <>
          <StyledIcon type={type} iconPos={iconPos}/>
          { children }
        </>
      );
    }
    return (
      <>
        { children }
      </>
    );
  };
  switch (type) {
    case 'outline':
      return <OutlineButton iconPos={iconPos}>{content()}</OutlineButton>;
    case 'disabled':
      return <DisableButton iconPos={iconPos}>{content()}</DisableButton>;
    case 'transparent':
      return <TransparentButton iconPos={iconPos}>{content()}</TransparentButton>;
    case 'fill':
      return <FillButton iconPos={iconPos}>{content()}</FillButton>;
  }
}

export default Button;
