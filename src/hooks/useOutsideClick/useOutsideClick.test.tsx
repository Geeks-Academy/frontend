import React, { useRef } from 'react';
import { fireEvent, render } from '@testing-library/react';
import useOutsideClick from './useOutsideClick';

const handler = jest.fn();
function ClickableComponent(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, handler);
  return <div id="clickable" ref={ref} data-testid="clickable" />;
}

function Container() {
  return (
    <div data-testid="dummy">
      <ClickableComponent />
    </div>
  );
}

describe('useOutsideClick hook', () => {
  test('should call event handler function', async () => {
    const { getByTestId } = render(<Container />);
    fireEvent.click(getByTestId('dummy'));
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
