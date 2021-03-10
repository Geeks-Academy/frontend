import StyledList from 'components/atoms/List';
import { listItemIcon } from 'assets/svg';
import { cleanup, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

describe('List', () => {
  test('render List component', () => {
    const data = [
      { id: 0, txt: 'Build up your team or find your code buddie' },
      { id: 1, txt: 'Improve your skills and work on amazing IT projects' },
      {
        id: 2,
        txt: 'Find support you need and help other people',
        link: {
          text: 'and more!',
          url: '/',
        },
      },
    ];

    const { getByTestId } = render(
      <BrowserRouter>
        <StyledList icon={listItemIcon} items={data} />
      </BrowserRouter>
    );
    expect(getByTestId('list')).toBeInTheDocument();
  });

  test('render List component without link', () => {
    const data = [
      { id: 0, txt: 'Build up your team or find your code buddie' },
      { id: 1, txt: 'Improve your skills and work on amazing IT projects' },
      { id: 2, txt: 'Find support you need and help other people' },
    ];

    const { getByTestId } = render(<StyledList icon={listItemIcon} items={data} />);
    expect(getByTestId('list')).toBeInTheDocument();
  });
});
