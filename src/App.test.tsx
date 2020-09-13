import React from 'react';
import { cleanup, render } from '@testing-library/react';
import typography from 'styles/typography';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

afterEach(cleanup);

describe('App', () => {
  test('render App must include GlobalStyles', () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(container).toHaveStyle(typography.globalStyles);
  });
});
