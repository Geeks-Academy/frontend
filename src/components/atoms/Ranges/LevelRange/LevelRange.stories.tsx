import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import LevelRange from './LevelRange';
import { IProps } from './LevelRange.model';

export default {
  title: 'atoms/Ranges/LevelRange',
  component: LevelRange,
  argTypes: {
    className: {
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    actions: {
      handles: ['onChange'],
    },
  },
} as Meta;

export const RangeWithLevel = (props: IProps): JSX.Element => <LevelRange {...props} />;
