import React from 'react';
import Button from 'components/atoms/Button';
import { ReactComponent as icon } from 'assets/button-icon.svg';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

describe('Button Component', () => {
  test('default button render', () => {
    const { getByTestId } = render(<Button>Click</Button>);
    expect(getByTestId('fill')).toBeInTheDocument();
  });

  test('render button with text', () => {
    const { getByText, getByTestId } = render(<Button>Click</Button>);
    expect(getByText('Click')).toHaveTextContent(/click/i);
    expect(getByTestId('fill')).toBeInTheDocument();
  });

  test('that fill button is default', () => {
    const { getByTestId } = render(<Button>Click</Button>);
    expect(getByTestId('fill')).toBeInTheDocument();
  });

  test('render button with particular type', () => {
    const { queryByTestId, rerender } = render(<Button variant="outline">Click</Button>);
    expect(queryByTestId('outline')).toBeInTheDocument();

    rerender(<Button variant="disabled">Click</Button>);
    expect(queryByTestId('disabled')).toBeInTheDocument();

    rerender(<Button variant="transparent">Click</Button>);
    expect(queryByTestId('transparent')).toBeInTheDocument();

    rerender(<Button variant="fill">Click</Button>);
    expect(queryByTestId('fill')).toBeInTheDocument();
  });

  test('checks that icon has rendered', () => {
    const { getByTestId } = render(
      <Button icon={icon} iconPos="left">
        Click
      </Button>
    );
    expect(getByTestId('fill').querySelector('svg')).toBeInTheDocument();
  });

  test('if icon or iconPos not passed then icon shouldnt render', () => {
    const { getByTestId, rerender } = render(<Button icon={icon}>Click</Button>);
    expect(getByTestId('fill').querySelector('svg')).not.toBeInTheDocument();

    rerender(<Button iconPos="left">Click</Button>);
    expect(getByTestId('fill').querySelector('svg')).not.toBeInTheDocument();
  });
});
