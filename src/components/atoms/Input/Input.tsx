import React from 'react';
import { InputWrapper, Label, StyledIcon, StyledInput } from './Input.styled';
import { IProps } from './Input.model';
import useDebounce from '../../../hooks/useDebounce/useDebounce';

const Input = ({
  type = 'text',
  icon: Icon,
  label,
  ref,
  className,
  placeholder,
  onChangeFunc,
  debounce,
  id,
  ...props
}: IProps): JSX.Element => {
  const inputLabelId = label && id ? `${id}-label` : undefined;
  const renderLabel = () => label && <Label htmlFor={inputLabelId}>{label}</Label>;
  const debounceEffect = useDebounce();
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>, func: () => void) => {
    if (!func) {
      return;
    }
    debounce ? debounceEffect(func, debounce) : func();
  };

  return (
    <InputWrapper className={className}>
      {renderLabel()}
      <StyledInput
        id={inputLabelId}
        isIcon={!!Icon}
        type={type}
        placeholder={placeholder}
        onChange={(e) => handleOnChange(e, onChangeFunc)}
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
