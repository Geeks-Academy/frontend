import React from 'react';
import { InputIcon } from 'assets';
import { Meta } from '@storybook/react/types-6-0';
import Input from './Input';
import { IProps } from './Input.model';

export default {
  title: 'atoms/Input',
  component: Input,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email', 'date', 'number'],
      },
    },
    label: {
      type: 'string',
    },
    className: {
      control: {
        disable: true,
      },
    },
    icon: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

export const Default = ({ placeholder, type, label, icon }: IProps): JSX.Element => (
  <Input type={type} placeholder={placeholder} label={label} icon={icon} />
);

export const InputWithPlaceholder = ({ type, label, icon }: IProps): JSX.Element => (
  <Input type={type} placeholder="Input" label={label} icon={icon} />
);

export const InputWithIcon = ({ type, placeholder, label }: IProps): JSX.Element => (
  <Input type={type} placeholder={placeholder} label={label} icon={InputIcon} />
);

export const InputWithLabel = ({ type, placeholder, icon }: IProps): JSX.Element => (
  <Input type={type} placeholder={placeholder} label="Example" icon={icon} />
);

export const InputWithLabelAndIcon = ({ type, placeholder }: IProps): JSX.Element => (
  <Input type={type} placeholder={placeholder} label="Example" icon={InputIcon} />
);
