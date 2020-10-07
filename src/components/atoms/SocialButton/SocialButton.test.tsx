import React from 'react';
import SocialButton from 'components/atoms/SocialButton';
import { cleanup, render } from '@testing-library/react';
import { DefaultRole } from './SocialButton.model';

afterEach(cleanup);

describe('SocialButton Component', () => {
  test('render button with text depends of injected role text and logo info - Github', () => {
    const { getByText } = render(<SocialButton userRole="developer" logo="github" />);
    expect(getByText(DefaultRole.DEVELOPER)).toHaveTextContent(/Login as developer/i);
  });

  test('render button with text depends of injected role text and logo info - Google', () => {
    const { getByText } = render(<SocialButton userRole="non-developer" logo="google" />);
    expect(getByText(DefaultRole.NONDEVELOPER)).toHaveTextContent(/Login as non developer/i);
  });
});
