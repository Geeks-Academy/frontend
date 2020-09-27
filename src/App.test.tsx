import React from 'react';
import { cleanup, render } from '@testing-library/react';
import typography from 'styles/typography';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import App from './App';

afterEach(cleanup);

describe('App', () => {
  test('render App must include GlobalStyles', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toHaveStyle(typography.globalStyles);
  });
});
