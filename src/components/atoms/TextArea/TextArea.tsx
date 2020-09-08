import React, { useState } from 'react';
import { StyledTextArea } from './TextArea.styled';

export interface IProps {
  className?: string;
}

const TextArea = ({ className }: IProps): JSX.Element => {
  const [textAreaValue, setTextAreaValue] = useState<string>('');

  return (
    <StyledTextArea
      className={className}
      placeholder="Type something..."
      value={textAreaValue}
      onChange={({ target }: React.ChangeEvent<HTMLTextAreaElement>): void =>
        setTextAreaValue(target.value)
      }
    />
  );
};

export default TextArea;
