import React from 'react';
import { cleanup, render } from '@testing-library/react';
import GlobalStyles from './GlobalStyles';
import typography from './typography';

afterEach(cleanup);

describe('GlobalStyles', () => {
  test('render GlobalStyles has designer global styles included', () => {
    const { container } = render(<GlobalStyles />);
    expect(container).toHaveStyle(typography.globalStyles);
  });
  test('render GlobalStyles has box-sizing set', () => {
    const { container } = render(<GlobalStyles />);
    expect(container).toHaveStyle('box-sizing: border-box');
  });
});
