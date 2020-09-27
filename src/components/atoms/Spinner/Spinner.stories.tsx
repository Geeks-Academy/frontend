import React from 'react';
import Spinner from './Spinner';
import { IProps } from './Spinner.model';

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

export const SpinnerComponent = (props: IProps): JSX.Element => <Spinner {...props} />;
