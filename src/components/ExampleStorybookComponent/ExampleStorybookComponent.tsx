import React from 'react';
import { Button } from './ExampleStorybookComponent.styled';

interface IProps {
  label: string;
  size: string;
}

const ExampleStorybookComponent = ({ label, size }: IProps): JSX.Element => (
  <Button type="button" size={size}>
    {label}
  </Button>
);

export default ExampleStorybookComponent;
