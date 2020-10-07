import React, { useRef } from 'react';
import { fireEvent, render } from '@testing-library/react';
import useOutsideClick from './useOutsideClick';

const handler = jest.fn();
const ClickableComponent = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, handler);
  return <div ref={ref} data-testid="clickable" />;
};

const Container = (): JSX.Element => {
  return (
    <div data-testid="dummy">
      <ClickableComponent />
    </div>
  );
};

describe('useOutsideClick hook', () => {
  test('should call event handler function', () => {
    const { getByTestId } = render(<Container />);
    fireEvent.click(getByTestId('dummy'));
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
