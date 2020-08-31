import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

import { StyledAlert } from './SnackBar.styled';

export interface IProps {
  open: boolean;
  successMessage?: string;
  errorMessage?: string;
}

const SnackBar = ({ open, successMessage, errorMessage }: IProps): JSX.Element => {
  return (
    <Snackbar
      data-testid="notification"
      open={open}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <StyledAlert icon={false} severity={errorMessage ? 'error' : 'success'}>
        {errorMessage || successMessage}
      </StyledAlert>
    </Snackbar>
  );
};

export default SnackBar;
