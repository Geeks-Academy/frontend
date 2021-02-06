import React, { useState } from 'react';
import { Container, Input } from './Range.styled';

const Range = ({ className }: React.HTMLProps<HTMLInputElement>): JSX.Element => {
  const [rangeValue, setRangeValue] = useState<number>(1);

  return (
    <Container className={className}>
      <label htmlFor="range" id="range" aria-label="range">
        <Input
          onChange={(e) => setRangeValue(+e.target.value)}
          type="range"
          id="range"
          aria-label="range-input"
          name="range"
          min="0"
          max="100"
          value={rangeValue}
        />
      </label>
    </Container>
  );
};

export default Range;
