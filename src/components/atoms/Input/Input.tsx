import React, { useState } from 'react';
import { Container, InputWrapper, Label, StyledIcon, StyledInput } from './Input.styled';
import { IProps } from './Input.model';
import newId from '../utils/newid';

const Input = ({
  type = 'text',
  icon: Icon,
  label,
  className,
  placeholder,
  ...props
}: IProps): JSX.Element => {
  const [inputId] = useState(newId('input-'));
  const renderLabel = (id: string) => label && <Label htmlFor={id}>{label}</Label>;

  return (
    <Container className={className}>
      {renderLabel(inputId)}
      <InputWrapper>
        <StyledInput
          isIcon={!!Icon}
          type={type}
          placeholder={placeholder}
          {...props}
          id={inputId}
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
