import React, { useState } from 'react';
import { Input, Label, StyledWrapper } from './Range.styled';
import { IProps } from './Range.model';

const Range = ({ className }: IProps): JSX.Element => {
  const [rangeValue, setRangeValue] = useState(1);

  return (
    <StyledWrapper className={className}>
      <Label htmlFor="range" id="range" aria-label="Range">
        <Input
          onChange={(e) => setRangeValue(+e.target.value as number)}
          type="range"
          id="range"
          name="range"
          min="0"
          max="100"
          value={rangeValue}
        />
      </Label>
    </StyledWrapper>
  );
};

export default Range;
