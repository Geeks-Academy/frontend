import React from 'react';
import SnackBar, { IProps } from './SnackBar';

export default {
  title: 'atoms/SnackBar',
  component: SnackBar,
  argTypes: {
    open: {
      name: 'open',
      type: { name: 'boolean', required: true },
      defaultValue: true,
    },
    successMessage: {
      control: { type: 'text' },
    },
    errorMessage: {
      control: { type: 'text' },
    },
  },
};

export const Default = (props: IProps): JSX.Element => (
  <SnackBar successMessage="Success" {...props} />
);

export const Success = (props: IProps): JSX.Element => (
  <SnackBar {...props} successMessage="success" />
);

export const Error = (props: IProps): JSX.Element => <SnackBar {...props} errorMessage="error" />;
