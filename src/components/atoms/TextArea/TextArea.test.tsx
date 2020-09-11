import React from 'react';
import TextArea from 'components/atoms/TextArea';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

describe('TextArea', () => {
  test(' render TextArea component', () => {
    const { getByTestId } = render(<TextArea />);
    expect(getByTestId('textarea')).toBeInTheDocument();
  });
  test('render TextArea component with placeholder', () => {
    const placeholder = 'Type something...';
    const { getByTestId } = render(<TextArea placeholder={placeholder} />);
    expect(getByTestId('textarea')).toBeInTheDocument();
  });
});
