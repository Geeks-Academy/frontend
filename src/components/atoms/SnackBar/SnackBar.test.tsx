import React from 'react';
import SnackBar from 'components/atoms/SnackBar';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

describe('SnackBar', () => {
  test(' render SnackBar component', () => {
    const { getByTestId } = render(<SnackBar open />);
    expect(getByTestId('notification')).toBeInTheDocument();
  });
  test(' render success message after login', () => {
    const successMessageText = 'Success! Message after successful login';
    const { getByText } = render(<SnackBar open successMessage={successMessageText} />);
    expect(getByText(successMessageText)).toBeInTheDocument();
  });
  test(' render error message after login', () => {
    const errorMessageText = 'Error! Message after unsucessfull login';
    const { getByText } = render(<SnackBar open errorMessage={errorMessageText} />);
    expect(getByText(errorMessageText)).toBeInTheDocument();
  });
});
