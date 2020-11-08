import React from 'react';
import { Container, Label, StyledError, StyledIcon, StyledInput } from './Input.styled';
import { IProps } from './Input.model';

const Input = React.forwardRef(
  (
    { type = 'text', icon: Icon, label, className, placeholder, error, onChange, ...props }: IProps,
    ref?: React.Ref<HTMLInputElement>
  ): JSX.Element => {
    const renderLabel = () => label && <Label>{label}</Label>;
    return (
      <Container className={className}>
        {renderLabel()}
        <StyledInput
          name={label?.toLowerCase()}
          isIcon={!!Icon}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
          {...props}
        />
        {Icon && (
          <StyledIcon data-testid="icon">
            <Icon />
          </StyledIcon>
        )}
        <StyledError>{error}</StyledError>
      </Container>
    );
  }
);

export default Input;
