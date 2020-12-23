import React, { forwardRef } from 'react';
import useDebounce from 'hooks/useDebounce/useDebounce';
import { Container, InputWrapper, Label, StyledIcon, StyledInput } from './Input.styled';
import { IProps } from './Input.model';

const Input = forwardRef<HTMLInputElement, IProps>(
  (
    {
      type = 'text',
      icon: Icon,
      label,
      className,
      placeholder,
      onChange,
      fullWidth,
      error,
      name,
      debounce,
      id,
      ...props
    }: IProps,
    ref
  ): JSX.Element => {
    const debounceEffect = useDebounce();
    const handleOnChange = (action: () => void) => {
      if (!action) {
        return;
      }
      debounce ? debounceEffect(action, debounce) : action();
    };
    const inputLabelId = label && id && `${id}-label`;

    return (
      <Container className={className} fullWidth={fullWidth}>
        <InputWrapper fullWidth={fullWidth}>
          {label && <Label htmlFor={inputLabelId}>{label}</Label>}
          <StyledInput
            id={inputLabelId}
            isIcon={!!Icon}
            type={type}
            placeholder={placeholder}
            onChange={() => handleOnChange(onChange)}
            name={name}
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
