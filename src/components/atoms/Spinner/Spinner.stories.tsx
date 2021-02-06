import React from 'react';
import Spinner from './Spinner';

export default {
  title: 'atoms/Spinner',
  component: Spinner,
  argTypes: {
    className: {
      control: {
        disable: true,
      },
    },
  },
};

export const SpinnerComponent = (props: React.HTMLProps<HTMLDivElement>): JSX.Element => (
  <Spinner {...props} />
);
