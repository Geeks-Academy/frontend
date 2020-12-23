import React from 'react';
import { ButtonIcon } from 'assets';
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

export const Default = ({ children, iconPos, variant, icon }: IButton): JSX.Element => (
  <Button variant={variant} icon={icon} iconPos={iconPos}>
    {children}
  </Button>
);

export const FillWithIconLeft = ({ children, icon }: IButton): JSX.Element => (
  <Button variant="fill" icon={icon} iconPos="left">
    {children}
  </Button>
);

export const FillWithIconRight = ({ children, icon }: IButton): JSX.Element => (
  <Button variant="fill" icon={icon} iconPos="right">
    {children}
  </Button>
);

export const FillWithoutIcon = ({ children, icon }: IButton): JSX.Element => (
  <Button variant="fill" icon={icon}>
    {children}
  </Button>
);

export const OutlineWithIconLeft = ({ children, icon }: IButton): JSX.Element => (
  <Button variant="outline" icon={icon} iconPos="left">
    {children}
  </Button>
);

export const OutlineWithIconRight = ({ children, icon }: IButton): JSX.Element => (
  <Button variant="outline" icon={icon} iconPos="right">
    {children}
  </Button>
);

export const OutlineWithoutIcon = ({ children, icon }: IButton): JSX.Element => (
  <Button variant="outline" icon={icon}>
    {children}
  </Button>
);

export const DisabledWithIconLeft = ({ children, icon }: IButton): JSX.Element => (
  <Button variant="disabled" icon={icon} iconPos="left">
    {children}
  </Button>
);

export const DisabledWithIconRight = ({ children, icon }: IButton): JSX.Element => (
  <Button variant="disabled" icon={icon} iconPos="right">
    {children}
  </Button>
);

export const DisabledWithoutIcon = ({ children, icon }: IButton): JSX.Element => (
  <Button variant="disabled" icon={icon}>
    {children}
  </Button>
);

export const TransparentWithIconLeft = ({ children, icon }: IButton): JSX.Element => (
  <Button variant="transparent" icon={icon} iconPos="left">
    {children}
  </Button>
);

export const TransparentWithIconRight = ({ children, icon }: IButton): JSX.Element => (
  <Button variant="transparent" icon={icon} iconPos="right">
    {children}
  </Button>
);

export const TransparentWithoutIcon = ({ children, icon }: IButton): JSX.Element => (
  <Button variant="transparent" icon={icon}>
    {children}
  </Button>
);
