import React, { useState } from 'react';
import { IAttributes } from 'types/interfaces';
import { StyledTextArea } from './TextArea.styled';

const TextArea = ({
  placeholder = 'Type something...',
  ...props
}: IAttributes<HTMLTextAreaElement>): JSX.Element => {
  const [value, setValue] = useState<string>('');

  return (
    <StyledTextArea
      data-testid="textarea"
      placeholder={placeholder}
      value={value}
      onChange={({ target }: React.ChangeEvent<HTMLTextAreaElement>): void =>
        setValue(target.value)
      }
      {...props}
    />
  );
};

export default TextArea;
