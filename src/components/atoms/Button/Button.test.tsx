import React from 'react';
import Button from 'components/atoms/Button';
import { ButtonIcon } from 'assets/index';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

describe('Button Component', () => {
  test('render button with text', () => {
    const { getByText } = render(<Button>Click</Button>);
    expect(getByText('Click')).toHaveTextContent(/click/i);
  });

  test('that fill button is default', () => {
    const { getByTestId } = render(<Button>Click</Button>);
    expect(getByTestId('fill')).toBeInTheDocument();
  });

  test('render button with particular type', () => {
    const { queryByTestId, rerender } = render(<Button type="outline">Click</Button>);
    expect(queryByTestId('outline')).toBeInTheDocument();

    rerender(<Button type="disabled">Click</Button>);
    expect(queryByTestId('disabled')).toBeInTheDocument();

    rerender(<Button type="transparent">Click</Button>);
    expect(queryByTestId('transparent')).toBeInTheDocument();

    rerender(<Button type="fill">Click</Button>);
    expect(queryByTestId('fill')).toBeInTheDocument();
  });

  test('checks that icon has rendered', () => {
    const { getByTestId } = render(
      <Button icon={ButtonIcon} iconPos="left">
        Click
      </Button>
    );
    expect(getByTestId('fill').querySelector('svg')).toBeInTheDocument();
  });

  test('if icon or iconPos not passed then icon shouldnt render', () => {
    const { getByTestId, rerender } = render(<Button icon={ButtonIcon}>Click</Button>);
    expect(getByTestId('fill').querySelector('svg')).not.toBeInTheDocument();

    rerender(<Button iconPos="left">Click</Button>);
    expect(getByTestId('fill').querySelector('svg')).not.toBeInTheDocument();
  });
});
