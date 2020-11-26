import React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo';

describe('Logo Component', () => {
  test('should render default Logo component', () => {
    const { getByTestId } = render(<Logo />);
    expect(getByTestId('logo-horizontal')).toBeInTheDocument();
  });

  test('should render logo only', () => {
    const { getByTestId } = render(<Logo logoOnly />);
    expect(getByTestId('logo-only')).toBeInTheDocument();
  });

  test('should render logo in horizontal position', () => {
    const { getByTestId } = render(<Logo textPlacement="vertical" />);
    expect(getByTestId('logo-vertical')).toBeInTheDocument();
  });
});
