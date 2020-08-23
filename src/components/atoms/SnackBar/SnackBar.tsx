import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { StyledAlert } from './SnackBar.styled';

interface SnackBarProps {
  className?: string;
  open: boolean;
  error: boolean;
}

const SnackBar = ({ className, open, error }: SnackBarProps) => {
  const text = error
    ? 'Error! Message after unsuccessful login'
    : 'Success! Message after successful login';

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <StyledAlert className={className} icon={false} severity={error ? 'error' : 'success'}>
        {text}
      </StyledAlert>
    </Snackbar>
  );
};

export default SnackBar;
