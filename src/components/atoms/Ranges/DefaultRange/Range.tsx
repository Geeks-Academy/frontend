import React, { useState } from 'react';
import { Container, Input } from './Range.styled';
import { IProps } from './Range.model';
import newId from '../../utils/newid';

const Range = ({ className }: IProps): JSX.Element => {
  const [rangeValue, setRangeValue] = useState<number>(1);
  const id = newId('range-');

  return (
    <Container className={className}>
      <label htmlFor={id} aria-label="range">
        <Input
          onChange={(e) => setRangeValue(+e.target.value)}
          type="range"
          id={id}
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
