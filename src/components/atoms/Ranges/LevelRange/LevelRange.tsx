import React, { useState } from 'react';
import {
  Datalist,
  Input,
  Label,
  Option,
  StyledWrapper,
  ThumbSlider,
  ThumbWrapper,
} from './LevelRange.styled';
import { IProps } from './LevelRange.model';

const LevelRange = ({ className, type }: IProps): JSX.Element => {
  const [rangeValue, setRangeValue] = useState(1);

  return (
    <StyledWrapper className={className}>
      <Label htmlFor="range" aria-label="range">
        <Input
          onChange={(e) => setRangeValue(+e.target.value as number)}
          type={type}
          id="range"
          name="range"
          min="0"
          max="100"
          value={rangeValue}
          list="level"
          step="1"
        />
        <ThumbWrapper value={rangeValue}>
          <ThumbSlider value={rangeValue} />
        </ThumbWrapper>
        <Datalist id="level">
          <Option aria-label="newbie" />
          <Option aria-label="junior" />
          <Option aria-label="mid" />
          <Option aria-label="senior" />
        </Datalist>
      </Label>
    </StyledWrapper>
  );
};

export default LevelRange;
