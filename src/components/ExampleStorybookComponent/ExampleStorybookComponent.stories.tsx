import React from 'react';
import ExampleStorybookComponent from './ExampleStorybookComponent';

export default {
  title: 'Example/ExampleStorybookComponent',
  component: ExampleStorybookComponent,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['default', 'small', 'large'],
      },
    },
  },
};

interface IProps {
  label: string;
  size: string;
}

export const Default = (props: IProps): JSX.Element => (
  <ExampleStorybookComponent {...props} label="Default" />
);

export const Small = (props: IProps): JSX.Element => (
  <ExampleStorybookComponent {...props} label="Small" size="small" />
);

export const Large = (props: IProps): JSX.Element => (
  <ExampleStorybookComponent {...props} label="Large" size="large" />
);
