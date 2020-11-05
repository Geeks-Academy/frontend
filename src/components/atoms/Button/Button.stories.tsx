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

export const Default = ({ children, iconPos, type, icon }: IButton): JSX.Element => (
  <Button type={type} icon={icon} iconPos={iconPos}>
    {children}
  </Button>
);

export const FillWithIconLeft = ({ children, icon }: IButton): JSX.Element => (
  <Button icon={icon} iconPos="left" variant="fill">
    {children}
  </Button>
);

export const FillWithIconRight = ({ children, icon }: IButton): JSX.Element => (
  <Button icon={icon} iconPos="right" variant="fill">
    {children}
  </Button>
);

export const FillWithoutIcon = ({ children, icon }: IButton): JSX.Element => (
  <Button icon={icon} variant="fill">
    {children}
  </Button>
);

export const OutlineWithIconLeft = ({ children, icon }: IButton): JSX.Element => (
  <Button icon={icon} iconPos="left" variant="outline">
    {children}
  </Button>
);

export const OutlineWithIconRight = ({ children, icon }: IButton): JSX.Element => (
  <Button icon={icon} iconPos="right" variant="outline">
    {children}
  </Button>
);

export const OutlineWithoutIcon = ({ children, icon }: IButton): JSX.Element => (
  <Button icon={icon} variant="outline">
    {children}
  </Button>
);

export const DisabledWithIconLeft = ({ children, icon }: IButton): JSX.Element => (
  <Button icon={icon} iconPos="left" variant="disabled">
    {children}
  </Button>
);

export const DisabledWithIconRight = ({ children, icon }: IButton): JSX.Element => (
  <Button icon={icon} iconPos="right" variant="disabled">
    {children}
  </Button>
);

export const DisabledWithoutIcon = ({ children, icon }: IButton): JSX.Element => (
  <Button icon={icon} variant="disabled">
    {children}
  </Button>
);

export const TransparentWithIconLeft = ({ children, icon }: IButton): JSX.Element => (
  <Button icon={icon} iconPos="left" variant="transparent">
    {children}
  </Button>
);

export const TransparentWithIconRight = ({ children, icon }: IButton): JSX.Element => (
  <Button icon={icon} iconPos="right" variant="transparent">
    {children}
  </Button>
);

export const TransparentWithoutIcon = ({ children, icon }: IButton): JSX.Element => (
  <Button icon={icon} variant="transparent">
    {children}
  </Button>
);
