import React from 'react';
import TextArea from './TextArea';

export default {
  title: 'atoms/TextArea',
  component: TextArea,
  argTypes: {
    placeholder: {
      defaultValue: 'Type something...',
      type: 'string',
    },
    className: {
      control: {
        disable: true,
      },
    },
  },
};

export const Default = ({ placeholder }: React.HTMLProps<HTMLTextAreaElement>): JSX.Element => (
  <TextArea placeholder={placeholder} />
);
