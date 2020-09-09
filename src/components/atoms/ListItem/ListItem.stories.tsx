import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { Meta, Story } from '@storybook/react/types-6-0';

import { listItemIcon } from 'assets';
import ListItem, { IProps } from './ListItem';

export default {
  title: 'atoms/ListItem',
  component: ListItem,
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
} as Meta;

const Template: Story<IProps> = (props: IProps): JSX.Element => <ListItem {...props} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    id: 0,
    txt: 'Improve your skills and work on amazing IT projects',
    link: undefined,
  },
  icon: listItemIcon,
};

export const WithLink = Default.bind({});
WithLink.args = {
  ...Default.args,
  item: {
    id: 0,
    txt: 'Find support you need and help other people',
    link: {
      url: '/',
      text: 'and more!',
    },
  },
};
