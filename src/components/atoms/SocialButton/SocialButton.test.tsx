import React from 'react';
import SocialButton from 'components/atoms/SocialButton';
import { cleanup, render } from '@testing-library/react';
import { Logo, Role } from './SocialButton.model';

afterEach(cleanup);

describe('SocialButton Component', () => {
  test('render button with text depends of injected role text and logo info - Github', () => {
    const { getByText } = render(
      <SocialButton roleDependText={Role.DEVELOPER} logo={Logo.GITHUB} />
    );
    expect(getByText(Role.DEVELOPER)).toHaveTextContent(/Login as developer/i);
  });

  test('render button with text depends of injected role text and logo info - Google', () => {
    const { getByText } = render(
      <SocialButton roleDependText={Role.NONDEVELOPER} logo={Logo.GOOGLE} />
    );
    expect(getByText(Role.NONDEVELOPER)).toHaveTextContent(/Login as non developer/i);
  });
});
