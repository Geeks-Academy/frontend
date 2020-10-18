import React, { createRef, useState } from 'react';
import { fillArray } from '../helpers';
import { IYearBar } from './YearBar.model';
import { StyledWrapper, StyledYear, StyledYearBar } from './YearBar.styled';

const setYearsArray = (minYear: number, maxYear: number) => {
  const amountOfElements = maxYear - minYear + 1;
  const array = fillArray(amountOfElements).map((element) => element - 1 + 1900);
  return array;
};

const YearBar = ({ year }: IYearBar): JSX.Element => {
  const wrapperRef = createRef<HTMLDivElement>();

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [boxes] = useState(setYearsArray(1900, 2100));

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    if (wrapperRef.current) {
      setStartX(e.pageX - wrapperRef.current.offsetLeft);
      setScrollLeft(wrapperRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    e.preventDefault();
    if (wrapperRef.current) {
      const x = e.pageX - wrapperRef.current?.offsetLeft;
      const walk = x - startX;
      console.log({ walk, scrollLeft: wrapperRef.current?.scrollLeft, year });
      wrapperRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <StyledYearBar>
      <StyledWrapper
        className={isMouseDown ? 'active' : ''}
        ref={wrapperRef}
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseLeave={() => handleMouseLeave()}
        onMouseUp={() => handleMouseUp()}
        onMouseMove={(e) => handleMouseMove(e)}
      >
        {boxes.map((box) => (
          <StyledYear id={`${box}`} key={box}>
            {box}
          </StyledYear>
        ))}
      </StyledWrapper>
    </StyledYearBar>
  );
};

export default YearBar;
