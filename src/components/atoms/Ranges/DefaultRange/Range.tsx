import React, { useState } from 'react';
import { IAttributes } from 'types/interfaces';
import { Container, Input } from './Range.styled';

const Range = ({ ...props }: IAttributes<HTMLInputElement>): JSX.Element => {
  const [rangeValue, setRangeValue] = useState<number>(1);

  return (
    <Container {...props}>
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
