import { ButtonIcon } from 'assets';
import React from 'react';
import Button from './Button';
import { IButton } from './Button.model';

export default {
  title: 'atoms/Buttton',
  component: Button,
  args: {
    children: 'Click',
    icon: ButtonIcon,
    iconPos: null,
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['fill', 'outline', 'disabled', 'transparent'],
      },
    },
    iconPos: {
      control: {
        type: 'inline-radio',
        options: ['left', 'right', null],
      },
    },
    icon: {
      control: {
        disable: true,
      },
    },
    className: {
      control: {
        disable: true,
      },
    },
  },
};

export const Default = ({ children, iconPos, type, icon, onClick }: IButton): JSX.Element => (
  <Button type={type} icon={icon} iconPos={iconPos} onClick={onClick}>
    {children}
  </Button>
);

export const FillWithIconLeft = ({ children, icon, onClick }: IButton): JSX.Element => (
  <Button type="fill" icon={icon} iconPos="left" onClick={onClick}>
    {children}
  </Button>
);

export const FillWithIconRight = ({ children, icon, onClick }: IButton): JSX.Element => (
  <Button type="fill" icon={icon} iconPos="right" onClick={onClick}>
    {children}
  </Button>
);

export const FillWithoutIcon = ({ children, icon, onClick }: IButton): JSX.Element => (
  <Button type="fill" icon={icon} onClick={onClick}>
    {children}
  </Button>
);

export const OutlineWithIconLeft = ({ children, icon, onClick }: IButton): JSX.Element => (
  <Button type="outline" icon={icon} iconPos="left" onClick={onClick}>
    {children}
  </Button>
);

export const OutlineWithIconRight = ({ children, icon, onClick }: IButton): JSX.Element => (
  <Button type="outline" icon={icon} iconPos="right" onClick={onClick}>
    {children}
  </Button>
);

export const OutlineWithoutIcon = ({ children, icon, onClick }: IButton): JSX.Element => (
  <Button type="outline" icon={icon} onClick={onClick}>
    {children}
  </Button>
);

export const DisabledWithIconLeft = ({ children, icon, onClick }: IButton): JSX.Element => (
  <Button type="disabled" icon={icon} iconPos="left" onClick={onClick}>
    {children}
  </Button>
);

export const DisabledWithIconRight = ({ children, icon, onClick }: IButton): JSX.Element => (
  <Button type="disabled" icon={icon} iconPos="right" onClick={onClick}>
    {children}
  </Button>
);

export const DisabledWithoutIcon = ({ children, icon, onClick }: IButton): JSX.Element => (
  <Button type="disabled" icon={icon} onClick={onClick}>
    {children}
  </Button>
);

export const TransparentWithIconLeft = ({ children, icon, onClick }: IButton): JSX.Element => (
  <Button type="transparent" icon={icon} iconPos="left" onClick={onClick}>
    {children}
  </Button>
);

export const TransparentWithIconRight = ({ children, icon, onClick }: IButton): JSX.Element => (
  <Button type="transparent" icon={icon} iconPos="right" onClick={onClick}>
    {children}
  </Button>
);

export const TransparentWithoutIcon = ({ children, icon, onClick }: IButton): JSX.Element => (
  <Button type="transparent" icon={icon} onClick={onClick}>
    {children}
  </Button>
);
