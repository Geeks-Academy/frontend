import React from 'react';
import { InputWrapper, Label, StyledIcon, StyledInput } from './Input.styled';
import { IProps } from './Input.model';

const Input = ({ type = 'text', icon: Icon, label, ...props }: IProps): JSX.Element => {
  const renderLabel = () => (label ? <Label>{label}</Label> : null);
  return (
    <div>
      {renderLabel()}
      <InputWrapper>
        <StyledInput icon={Icon} type={type} {...props} />
        {Icon ? (
          <StyledIcon>
            <Icon />
          </StyledIcon>
        ) : null}
      </InputWrapper>
    </div>
  );
};

export default Input;
