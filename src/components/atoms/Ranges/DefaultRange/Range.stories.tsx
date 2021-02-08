import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { IAttributes } from 'types/interfaces';
import Range from './Range';

export default {
  title: 'atoms/Ranges/Range',
  component: Range,
  argTypes: {
    className: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

export const DefaultRange = (props: IAttributes<HTMLInputElement>): JSX.Element => (
  <Range {...props} />
);
