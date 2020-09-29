import React from 'react';
import { render } from '@testing-library/react';
import Paragraph from './Paragraph';

describe('Paragraph', () => {
  test('render Paragraph component with text', () => {
    const text = 'Test text';
    const { getByText } = render(<Paragraph>{text}</Paragraph>);
    expect(getByText(text)).toBeInTheDocument();
  });
});
