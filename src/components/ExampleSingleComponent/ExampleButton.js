import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './ExampleButton.styled';

const ExampleButton = ({ label, size }) => (
  <Button type="button" size={size}>
    {label}
  </Button>
);

ExampleButton.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOfType(['small', 'large']),
};

ExampleButton.defaultProps = {
  label: 'Button',
  size: '',
};

export default ExampleButton;
