import React, { useState } from 'react';
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
import { IProps } from './LevelRange.model';

const LevelRange = ({ className }: IProps): JSX.Element => {
  const [rangeValue, setRangeValue] = useState<number>(1);

  return (
    <Container className={className}>
      <Label htmlFor="range" aria-label="range">
        <Input
          onChange={(e) => setRangeValue(+e.target.value)}
          type="range"
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
          {data.map(({ id, label, value }) => (
            <Option key={id} aria-label={label} value={value} />
          ))}
        </Datalist>
      </Label>
    </Container>
  );
};

export default LevelRange;
