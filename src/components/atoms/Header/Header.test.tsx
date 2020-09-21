import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Header from './Header';

afterEach(cleanup);

describe('Header', () => {
  test('render Header component with title', () => {
    const title = 'Example title';
    const { getByText } = render(<Header title={title} />);
    expect(getByText(title)).toHaveTextContent(/Example/i);
  });
});
