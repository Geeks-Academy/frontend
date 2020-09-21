import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Range from './Range';
import { IProps } from './Range.model';

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

export const DefaultRange = (props: IProps): JSX.Element => <Range {...props} />;
