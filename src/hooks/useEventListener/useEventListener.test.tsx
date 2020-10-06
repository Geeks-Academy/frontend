import { renderHook } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/react';
import { useRef } from 'react';
import useEventListener from './useEventListener';

describe('useEventListener hook', () => {
  test('should bind event listener and call with event on window object', () => {
    const eventListener = jest.fn<void, [MouseEvent]>();
    renderHook(() => {
      useEventListener('click', eventListener);
    });

    fireEvent.click(window);
    expect(eventListener).toHaveBeenCalledTimes(1);
    expect(eventListener).toHaveBeenCalledWith(expect.any(Event));
  });

  test('should unbind event listener', () => {
    const targetElement = document.body;
    const eventListener = jest.fn<void, [MouseEvent]>();
    const { result } = renderHook(() => useRef(targetElement));
    const { unmount } = renderHook(() => {
      useEventListener('click', eventListener, result.current);
    });

    fireEvent.click(targetElement);
    expect(eventListener).toHaveBeenCalledTimes(1);

    unmount();

    fireEvent.click(targetElement);
    expect(eventListener).toHaveBeenCalledTimes(1);
  });
});
