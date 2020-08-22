import React from 'react';
import ExampleButton from './ExampleButton';

export default {
  title: 'Example/SingleComponents/ExampleButton',
  component: ExampleButton,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['default', 'small', 'large'],
      },
    },
  },
};

export const Default = (props) => <ExampleButton {...props} label="Default" />;

export const Small = (props) => (
  <ExampleButton {...props} label="Small" size="small" />
);

export const Large = (props) => (
  <ExampleButton {...props} label="Large" size="large" />
);
