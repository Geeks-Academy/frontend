import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import Paragraph, { IProps } from './Paragraph';

export default {
  title: 'atoms/Paragraph',
  component: Paragraph,
  argTypes: {
    className: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<IProps> = (props: IProps): JSX.Element => <Paragraph {...props} />;

export const Default = Template.bind({});
Default.args = {
  txt: 'Paragraph text test',
  className: 'paragraphTestClass',
};
