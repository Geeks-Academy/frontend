import { renderHook } from '@testing-library/react-hooks';
import useTimeout from './useTimeout';

beforeAll(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
});

describe('useTimeout hook', () => {
  test('is passed a `handler` and a `delay`', () => {
    const handler = jest.fn<void, []>();

    renderHook(() => {
      useTimeout(handler, 1000);
    });

    expect(handler).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(1000);
    expect(handler).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    expect(handler).toHaveBeenCalledTimes(1);
  });

  test('if you pass a `delay` of `null`, the timer is "paused"', () => {
    const handler = jest.fn<void, []>();

    renderHook(() => {
      useTimeout(handler, null);
    });

    jest.advanceTimersByTime(5000);
    expect(handler).toHaveBeenCalledTimes(0);
  });
});
