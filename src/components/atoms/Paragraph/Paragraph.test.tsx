import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Paragraph from './Paragraph';

afterEach(cleanup);

describe('Paragraph', () => {
  test('render Paragraph component with text', () => {
    const text = 'Test text';
    const { getByText } = render(<Paragraph txt={text} />);
    expect(getByText(text)).toBeInTheDocument();
  });
});
