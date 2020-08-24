import React from 'react'
import { IButton, EIconPosition } from './Button.model';
import {
  FillButton,
  OutlineButton,
  Image,
  DisableButton,
  TransparentButton
} from './Button.styled';

const Button = ({
  children,
  icon = undefined,
  iconPos = EIconPosition.NONE,
  type = 'fill'
}: IButton) => {
  const content = () => {
    if (icon && iconPos === EIconPosition.NONE) {
      throw Error('You need to specify icon position (iconPos prop)');
    }
    if (icon) {
      return (
        <>
          <Image src={icon} alt="" iconPos={iconPos} />
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
    case 'none':
      return <TransparentButton iconPos={iconPos}>{content()}</TransparentButton>;
    case 'fill':
      return <FillButton iconPos={iconPos}>{content()}</FillButton>;
  }
}

export default Button;
