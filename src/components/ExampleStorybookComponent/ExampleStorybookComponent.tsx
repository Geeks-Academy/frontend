import React from 'react';
import { Button } from './ExampleStorybookComponent.styled';

interface IProps {
  label: string;
  size: string;
}

const ExampleStorybookComponent = ({ label, size }: IProps) => (
  <Button type="button" size={size}>
    {label}
  </Button>
);

export default ExampleStorybookComponent;
