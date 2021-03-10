import React from 'react';

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  fullWidth?: boolean;
  label?: string;
  error?: string;
  onChange?: any; // todo: add property type
  debounce?: number;
}
