import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ListItem, { IProps } from './ListItem';
import listItemIcon from '../../../assets/listItemIcon.svg';

export default {
  title: 'atoms/ListItem',
  component: ListItem,
  decorators: [
    (Story: any): JSX.Element => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    item: {
      id: 0,
      txt: 'Improve your skills and work on amazing IT projects',
      link: null,
    },
    icon: listItemIcon,
  },
};

export const Default = (props: IProps): JSX.Element => <ListItem {...props} />;

export const WithLink = Default.bind({});
WithLink.args = {
  item: {
    txt: 'Find support you need and help other people',
    link: {
      url: 'https://bit.ly/3hHhnSW',
      text: 'and more!',
    },
  },
};
