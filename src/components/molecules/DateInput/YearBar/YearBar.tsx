import React, { useCallback, useEffect, useRef, useState } from 'react';
import { getYearsArray } from '../helpers';
import { IYearBar } from './YearBar.model';
import { StyledGradient, StyledWrapper, StyledYear, StyledYearBar } from './YearBar.styled';

const YearBar = ({ minYear, maxYear }: IYearBar): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [startX, setStartX] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [boxes] = useState(getYearsArray(minYear, maxYear));
  const [scrollPostion, setScrollPostion] = useState(0);
  const [scrollInterval, setScrollInterval] = useState(0);
  const [movementX, setMovementX] = useState(0);

  const accelerateScroll = () => {
    setScrollInterval(
      setInterval(() => {
        if (wrapperRef.current && movementX !== 0) {
          wrapperRef.current.scrollLeft -= movementX;
          setScrollPostion(wrapperRef.current.scrollLeft);
        }
      })
    );
  };

  const clearScrollInterval = useCallback(() => {
    setTimeout(() => {
      clearInterval(scrollInterval);
    }, 500);
  }, [scrollInterval]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    if (wrapperRef.current) {
      setStartX(e.pageX - wrapperRef.current.offsetLeft);
      setScrollPostion(wrapperRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    accelerateScroll();
    clearScrollInterval();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    e.preventDefault();
    setMovementX(e.movementX / 2);
    if (wrapperRef.current) {
      const x = e.pageX - wrapperRef.current?.offsetLeft;
      const walk = x - startX;
      wrapperRef.current.scrollLeft = scrollPostion - walk;
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    setScrollPostion(e.changedTouches[0].pageX);
  };

  const handleOnScroll = () => {
    if (!isMouseDown) {
      setScrollPostion(+`${wrapperRef.current?.scrollLeft}`);
    }
  };

  useEffect(() => {
    clearScrollInterval();
  }, [scrollInterval, clearScrollInterval]);

  return (
    <StyledYearBar>
      <StyledGradient className="left" />
      <StyledWrapper
        isMouseDown={isMouseDown}
        onScroll={handleOnScroll}
        className={isMouseDown ? 'active' : ''}
        ref={wrapperRef}
      >
        {boxes.map(({ value }) => (
          <StyledYear
            onMouseDown={(e) => handleMouseDown(e)}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={(e) => handleMouseMove(e)}
            onTouchMove={(e) => handleTouchMove(e)}
            onTouchEnd={() => setIsMouseDown(false)}
            onTouchStart={() => setIsMouseDown(true)}
            id={`${value}`}
            key={value}
          >
            {value}
          </StyledYear>
        ))}
      </StyledWrapper>
      <StyledGradient className="right" />
    </StyledYearBar>
  );
};

export default YearBar;
