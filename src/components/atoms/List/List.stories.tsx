import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { Meta, Story } from '@storybook/react/types-6-0';

import listItemIcon from 'assets/listItemIcon.svg';
import List, { IProps } from './List';

export default {
  title: 'atoms/List',
  component: List,
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
} as Meta;

const Template: Story<IProps> = (props: IProps): JSX.Element => <List {...props} />;

export const MultipleElement = Template.bind({});
MultipleElement.args = {
  icon: listItemIcon,
  items: [
    { id: 0, txt: 'Build up your team or find your code buddie' },
    { id: 1, txt: 'Improve your skills and work on amazing IT projects' },
    {
      id: 2,
      txt: 'Find support you need and help other people ',
      link: {
        text: 'and more!',
        url: 'https://bit.ly/3hHhnSW',
      },
    },
  ],
};
