import React from 'react';
import { render } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner', () => {
  test('render Spinner component without className props', () => {
    const { getByTestId } = render(<Spinner />);
    expect(getByTestId('spinner')).toBeInTheDocument();
  });
  test('render Spinner component with className props', () => {
    const className = 'className';
    const { getByTestId } = render(<Spinner className={className} />);
    expect(getByTestId('spinner')).toHaveClass(className);
  });
});
