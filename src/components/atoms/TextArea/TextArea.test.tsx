import React from 'react';
import TextArea from 'components/atoms/TextArea';
import { fireEvent, render } from '@testing-library/react';

describe('TextArea', () => {
  const setup = () => {
    const utils = render(<TextArea />);
    const input = utils.getByTestId('textarea');
    return {
      input,
      ...utils,
    };
  };

  test(' render TextArea component', () => {
    const { getByTestId } = render(<TextArea />);
    expect(getByTestId('textarea')).toBeInTheDocument();
  });
  test('render TextArea component with placeholder', () => {
    const placeholder = 'Type something...';
    const { getByTestId } = render(<TextArea placeholder={placeholder} />);
    expect(getByTestId('textarea')).toBeInTheDocument();
  });
  test('TextArea onChange check', () => {
    const { input } = setup();
    const testValue = 'test value';
    fireEvent.change(input, { target: { value: testValue } });
    expect((input as HTMLInputElement).value).toBe(testValue);
  });
});
