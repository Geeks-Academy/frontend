import React from 'react';

import { Button } from './ExampleStorybookComponent.styled';
import { Size } from './ExampleStorybookComponent.model'

interface IProps {
  label: string;
  size: Size;
}

const ExampleStorybookComponent = ({ label, size }: IProps) => (
  <Button type="button" size={size}>
    {label}
  </Button>
);

export default ExampleStorybookComponent;
