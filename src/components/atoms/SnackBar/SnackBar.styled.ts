import styled, { css } from 'styled-components';
import Alert from '@material-ui/lab/Alert';

import colors from 'styles/colors';

export const StyledAlert = styled(Alert)`
  border-radius: 6px;
  color: ${colors.text.Success60};
  background-color: ${colors.background.Success60};

  ${({ alertcolor }) =>
    alertcolor &&
    css`
      color: ${colors.text.Error60};
      background-color: ${colors.background.Error60};
    `}
`;
