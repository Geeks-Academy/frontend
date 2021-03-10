import { fireEvent, render } from '@testing-library/react';
import LevelRange from './LevelRange';

describe('Range', () => {
  const setup = () => {
    const utils = render(<LevelRange />);
    const input = utils.getByLabelText('level-range-input');
    return {
      input,
      ...utils,
    };
  };

  test('render default Range component', () => {
    const { getByLabelText } = render(<LevelRange />);
    expect(getByLabelText('level-range')).toBeInTheDocument();
  });
  test('render Range component with some value', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: '50' } });
    expect((input as HTMLInputElement).value).toBe('50');
  });
});
