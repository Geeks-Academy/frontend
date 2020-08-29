import React from 'react';
import SnackBar from './SnackBar';

export default {
  title: 'atoms/SnackBar',
  component: SnackBar,
  argTypes: {
    open: {
      control: { type: 'boolean' },
    },
    successMessage: {
      control: { type: 'text' },
    },
    errorMessage: {
      control: { type: 'text' },
    },
  },
};

export interface IProps {
  open: boolean;
  successMessage: string;
  errorMessage: string;
}

export const Default = (props: IProps) => {
  console.log(props);
  return <SnackBar {...props} />;
};

export const Success = (props: IProps) => {
  return <SnackBar {...props} successMessage="success" />;
};

export const Error = (props: IProps) => {
  return <SnackBar {...props} errorMessage="error" />;
};
