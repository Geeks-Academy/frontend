import React, { useState } from 'react';
import { StyledTextArea } from './TextArea.styled';

const TextArea = ({
  className,
  placeholder = 'Type something...',
}: React.HTMLProps<HTMLTextAreaElement>): JSX.Element => {
  const [value, setValue] = useState<string>('');

  return (
    <StyledTextArea
      className={className}
      data-testid="textarea"
      placeholder={placeholder}
      value={value}
      onChange={({ target }: React.ChangeEvent<HTMLTextAreaElement>): void =>
        setValue(target.value)
      }
    />
  );
};

export default TextArea;
