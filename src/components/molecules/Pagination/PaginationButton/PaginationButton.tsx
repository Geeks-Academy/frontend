import React from 'react';
import { IPaginationButton } from './PagiantionButton.model';
import { StyledPaginationButton } from './PaginationButtonStyled';

const PaginationButton = ({
  children,
  onClick,
  type,
  className,
  isCurrent,
  disabled,
}: IPaginationButton): JSX.Element => {
  return (
    <StyledPaginationButton
      onClick={onClick}
      isCurrent={isCurrent}
      disabled={disabled}
      className={className}
      type={type}
    >
      {children}
    </StyledPaginationButton>
  );
};

export default PaginationButton;
