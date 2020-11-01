import React from 'react';
import { render } from '@testing-library/react';
import { useDocumentTitle } from 'hooks';

const Component = (): JSX.Element => {
  useDocumentTitle('Document Title');
  return <div />;
};

describe('useDocumentTitle hook', () => {
  test('should change document title', () => {
    render(<Component />);
    expect(document.title).toEqual('Document Title');
  });
});
