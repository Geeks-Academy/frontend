import React from 'react';
import { Button } from './ExampleButton.styled';

interface IProps {
  label: string;
  size: string;
}

const ExampleButton = ({ label, size } : IProps) => (
  <Button type="button" size={size}>
    {label}
  </Button>
);

ExampleButton.defaultProps = {
  size: ''
}


export default ExampleButton;
