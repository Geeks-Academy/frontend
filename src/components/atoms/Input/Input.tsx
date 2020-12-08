import React from 'react';
import { Container, InputWrapper, Label, StyledIcon, StyledInput } from './Input.styled';
import { IProps } from './Input.model';

const Input = React.forwardRef<HTMLInputElement, IProps>(
  (
    {
      type = 'text',
      icon: Icon,
      label,
      className,
      placeholder,
      onChange,
      fullWidth,
      name,
      id,
      error,
      ...props
    }: IProps,
    ref
  ): JSX.Element => {
    const inputLabelId = label && id && `${id}-label`;

    return (
      <Container className={className} fullWidth={fullWidth}>
        <InputWrapper fullWidth={fullWidth}>
          {label && <Label htmlFor={inputLabelId}>{label}</Label>}
          <StyledInput
            id={inputLabelId}
            isIcon={!!Icon}
            type={type}
            name={name}
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
        </InputWrapper>
        {error && console.log(error)}
      </Container>
    );
  }
);

export default Input;
