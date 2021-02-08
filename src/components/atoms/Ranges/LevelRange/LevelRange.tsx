import React, { useState } from 'react';
import { IAttributes } from 'types/interfaces';
import {
  Container,
  Datalist,
  Input,
  Label,
  Option,
  ThumbSlider,
  ThumbWrapper,
} from './LevelRange.styled';
import { data } from './data';

const LevelRange = ({ ...props }: IAttributes<HTMLInputElement>): JSX.Element => {
  const [rangeValue, setRangeValue] = useState<number>(1);

  return (
    <Container {...props}>
      <Label htmlFor="range" aria-label="level-range">
        <Input
          onChange={(e) => setRangeValue(+e.target.value)}
          type="range"
          id="range"
          aria-label="level-range-input"
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
          {data.map(({ id, label, value }) => (
            <Option key={id} aria-label={label} value={value} />
          ))}
        </Datalist>
      </Label>
    </Container>
  );
};

export default LevelRange;
