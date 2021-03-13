import { fireEvent, render } from '@testing-library/react';
import Range from './Range';

describe('Range', () => {
  const setup = () => {
    const utils = render(<Range />);
    const input = utils.getByLabelText('range-input');
    return {
      input,
      ...utils,
    };
  };

  test('render default Range component', () => {
    const { getByLabelText } = render(<Range />);
    expect(getByLabelText('range')).toBeInTheDocument();
  });
  test('render Range component with some value', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: '50' } });
    expect((input as HTMLInputElement).value).toBe('50');
  });
});
