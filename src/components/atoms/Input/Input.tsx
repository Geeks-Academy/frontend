import React from 'react';
import { IProps } from './Input.model';
import { Container, InputWrapper, Label, StyledIcon, StyledInput } from './Input.styled';

const Input = React.forwardRef(
  (
    {
      type = 'text',
      icon: Icon,
      label,
      className,
      name,
      placeholder,
      handleOnChange,
      fullWidth = false,
      defaultValue,
      ...props
    }: IProps,
    ref
  ): JSX.Element => {
    const renderLabel = () => label && <Label>{label}</Label>;
    return (
      <Container className={className} fullWidth={fullWidth}>
        {renderLabel()}
        <InputWrapper>
          <StyledInput
            isIcon={!!Icon}
            type={type}
            name={name}
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={handleOnChange}
            ref={ref}
            {...props}
          />
          {Icon && (
            <StyledIcon data-testid="icon">
              <Icon />
            </StyledIcon>
          )}
        </InputWrapper>
      </Container>
    );
  }
);

export default Input;
