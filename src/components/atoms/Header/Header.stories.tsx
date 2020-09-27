import React from 'react';
import Header, { IProps } from './Header';

export default {
  title: 'atoms/header',
  component: Header,
  argTypes: {
    title: {
      defaultValue: 'Join our IT platform to share ideas, exchange knowledge and build a team!',
      controls: {
        type: 'text',
      },
    },
    className: {
      control: {
        disable: true,
      },
    },
  },
};

export const Default = (props: IProps): JSX.Element => <Header {...props} />;
