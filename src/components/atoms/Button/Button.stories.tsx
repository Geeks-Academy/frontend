import React from 'react';
import { ReactComponent as Icon } from 'assets/button-icon.svg';
import Button from './Button';
import { IButton } from './Button.model';

export default {
  title: 'atoms/Buttton',
  component: Button,
  args: {
    children: 'Click',
    icon: Icon,
  },
  argTypes: {
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
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

export const Default = ({ children, iconPos = 'left', type, icon }: IButton) => (
  <Button type={type} icon={icon} iconPos={iconPos}>
    {children}
  </Button>
);
