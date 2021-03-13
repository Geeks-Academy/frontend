import Input from 'components/atoms/Input';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

describe('Input Component', () => {
  const mockedIcon = () => <svg />;
  test('render input with placeholder', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Example" />);
    expect(getByPlaceholderText(/example/i)).toBeInTheDocument();
  });

  test('render input with label', () => {
    const { getByText } = render(<Input placeholder="Example" label="LabelExample" />);
    expect(getByText('LabelExample')).toBeInTheDocument();
  });

  test('render input with icon', () => {
    const { getByTestId } = render(<Input placeholder="Example" icon={mockedIcon} />);
    expect(getByTestId('icon').querySelector('svg')).toBeInTheDocument();
  });

  test('render with label and icon', () => {
    const { getByTestId, getByText } = render(
      <Input placeholder="Example" icon={mockedIcon} label="LabelExample" />
    );
    expect(getByText('LabelExample')).toBeInTheDocument();
    expect(getByTestId('icon').querySelector('svg')).toBeInTheDocument();
  });
});
