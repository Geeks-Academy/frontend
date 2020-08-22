import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { StyledAlert } from './SnackBar.styled';
import PropTypes from 'prop-types';

const SnackBar = ({ className }) => {
  const open = true;
  const error = false;

  const txt = error
    ? 'Error! Message after unsuccessful login'
    : 'Success! Message after successful login';

  return (
    <Snackbar open={open} autoHideDuration={5000}>
      <StyledAlert className={className} icon={false} isError={error}>
        {txt}
      </StyledAlert>
    </Snackbar>
  );
};

SnackBar.propTypes = {
  className: PropTypes.object,
};

export default SnackBar;
