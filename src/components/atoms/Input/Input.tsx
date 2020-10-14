import React from 'react';
import { Container, InputWrapper, Label, StyledIcon, StyledInput } from './Input.styled';
import { IProps } from './Input.model';

const Input = ({
  type = 'text',
  icon: Icon,
  label,
  ref,
  min,
  max,
  value,
  pattern,
  defaultValue,
  className,
  placeholder,
  handleOnChange,
  ...props
}: IProps): JSX.Element => {
  const renderLabel = () => label && <Label>{label}</Label>;
  return (
    <Container className={className}>
      {renderLabel()}
      <InputWrapper>
        <StyledInput
          isIcon={!!Icon}
          type={type}
          min={min}
          max={max}
          pattern={pattern}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={handleOnChange}
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
};

export default Input;
