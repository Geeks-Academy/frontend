import React from 'react';
import { InputWrapper, Label, StyledIcon, StyledInput } from './Input.styled';
import { IProps } from './Input.model';

const Input = ({
  type = 'text',
  icon: Icon,
  label,
  ref,
  className,
  placeholder,
  handleOnChange,
  id,
  ...props
}: IProps): JSX.Element => {
  const inputLabelId = label && id ? `${id}-label` : undefined;
  const renderLabel = () => label && <Label htmlFor={inputLabelId}>{label}</Label>;
  return (
    <InputWrapper>
      {renderLabel()}
      <StyledInput
        id={inputLabelId}
        isIcon={!!Icon}
        type={type}
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
  );
};

export default Input;
