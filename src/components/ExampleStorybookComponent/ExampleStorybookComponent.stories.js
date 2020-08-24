import React from 'react';
import ExampleStorybookComponent from './ExampleStorybookComponent.tsx';

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

export const Default = (props) => (
  <ExampleStorybookComponent {...props} label="Default" />
);

export const Small = (props) => (
  <ExampleStorybookComponent {...props} label="Small" size="small" />
);

export const Large = (props) => (
  <ExampleStorybookComponent {...props} label="Large" size="large" />
);
