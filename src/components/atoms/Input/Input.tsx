import React from 'react';
import { InputWrapper, Label, StyledIcon, StyledInput } from './Input.styled';
import { IProps } from './Input.model';

const Input = ({
  type = 'text',
  icon: Icon,
  label,
  className,
  placeholder,
  ...props
}: IProps): JSX.Element => {
  const renderLabel = () => label && <Label>{label}</Label>;
  return (
    <div className={className}>
      {renderLabel()}
      <InputWrapper>
        <StyledInput isIcon={Icon !== undefined} type={type} placeholder={placeholder} {...props} />
        {Icon && (
          <StyledIcon>
            <Icon />
          </StyledIcon>
        )}
      </InputWrapper>
    </div>
  );
};

export default Input;
