import React from 'react';
import useDebounce from 'hooks/useDebounce/useDebounce';
import { InputWrapper, Label, StyledIcon, StyledInput } from './Input.styled';
import { IProps } from './Input.model';

const Input = ({
  type = 'text',
  icon: Icon,
  label,
  className,
  placeholder,
  onChange,
  debounce,
  id,
  ...props
}: IProps): JSX.Element => {
  const debounceEffect = useDebounce();
  const inputLabelId = label && id ? `${id}-label` : undefined;
  const renderLabel = () => label && <Label htmlFor={inputLabelId}>{label}</Label>;
  const handleOnChange = (action: () => void) => {
    if (!action) {
      return;
    }
    debounce ? debounceEffect(action, debounce) : action();
  };

  return (
    <InputWrapper className={className}>
      {renderLabel()}
      <StyledInput
        id={inputLabelId}
        isIcon={!!Icon}
        type={type}
        placeholder={placeholder}
        onChange={() => handleOnChange(onChange)}
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
