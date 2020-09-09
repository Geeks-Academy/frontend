import React, { useState } from 'react';
import { StyledTextArea } from './TextArea.styled';

export interface IProps {
  className?: string;
  placeholder?: string;
}

const TextArea = ({ className, placeholder = 'Type something...' }: IProps): JSX.Element => {
  const [value, setValue] = useState<string>('');

  return (
    <StyledTextArea
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={({ target }: React.ChangeEvent<HTMLTextAreaElement>): void =>
        setValue(target.value)
      }
    />
  );
};

export default TextArea;
