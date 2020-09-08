import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { Meta, Story } from '@storybook/react/types-6-0';

import Paragraph, { IProps } from './Paragraph';

export default {
  title: 'atoms/Paragraph',
  component: Paragraph,
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
} as Meta;

const Template: Story<IProps> = (props: IProps): JSX.Element => <Paragraph {...props} />;

export const Default = Template.bind({});
Default.args = {
  txt: 'Paragraph text test',
  className: 'paragraphTestClass',
};
