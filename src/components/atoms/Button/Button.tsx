import React from 'react'
import { IButton } from './Button.model';
import {
  FillButton,
  OutlineButton,
  DisableButton,
  TransparentButton,
  ButtonIcon
} from './Button.styled';

const Button = ({
  children,
<<<<<<< HEAD
  icon: Icon,
  iconPos = 'none',
=======
  icon: Icon = undefined,
  iconPos = null,
>>>>>>> 63c1205b65c172e89124de44a244cae85157b711
  type = 'fill'
}: IButton) => {
  const content = () => {
    if (Icon && iconPos) {
      return (
        <>
          <ButtonIcon type={type} iconPos={iconPos}>
            <Icon />
          </ButtonIcon>
          {children}
        </>
      );
    }
    return (
      <>
        {children}
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
