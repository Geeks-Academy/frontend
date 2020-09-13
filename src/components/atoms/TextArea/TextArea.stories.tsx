import React from 'react';
import TextArea, { IProps } from './TextArea';

export default {
  title: 'atoms/TextArea',
  component: TextArea,
  argTypes: {
    placeholder: {
      defaultValue: 'Type something...',
      type: 'string',
    },
  },
};

export const Default = ({ placeholder }: IProps): JSX.Element => (
  <TextArea placeholder={placeholder} />
);
