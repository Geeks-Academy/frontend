import React, { createRef, useCallback, useEffect, useState } from 'react';
import { fillArray, scrollToCurrentYear } from '../helpers';
import { IYearBar } from './YearBar.model';
import { StyledGradient, StyledWrapper, StyledYear, StyledYearBar } from './YearBar.styled';

const setYearsArray = (minYear: number, maxYear: number) => {
  const amountOfElements = maxYear - minYear + 1;
  const array = fillArray(amountOfElements).map((element) => {
    return { value: element + minYear - 1, position: (element - 1) * 72 };
  });
  return array;
};

const YearBar = ({ year, setSelectedYear }: IYearBar): JSX.Element => {
  const wrapperRef = createRef<HTMLDivElement>();
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [boxes] = useState(setYearsArray(2000, 2050));
  const [currentYear, setCurrentYear] = useState(year);
  const [isFirstRender, setIsFirstRender] = useState(true);

  // const manageCurrentPosition = (selectedYear: number) => boxes.find(element => element.value === +selectedYear)?.position;
  const manageCurrentPosition = useCallback(
    (selectedYear: number) => {
      return boxes.find((element) => element.value === +selectedYear)?.position;
    },
    [boxes]
  );

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    if (wrapperRef.current) {
      setStartX(e.pageX - wrapperRef.current.offsetLeft);
      setScrollLeft(wrapperRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMouseDown) {
      const selectedYear = +(e.target as HTMLDivElement).id;
      setCurrentYear(selectedYear);
    }
    setIsMouseDown(false);
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    const selectedYear = +(e.target as HTMLDivElement).id;
    setCurrentYear(selectedYear);
    setIsMouseDown(false);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isMouseDown) {
      const selectedYear = +(e.target as HTMLDivElement).id;
      setCurrentYear(selectedYear);
    }
    setIsMouseDown(false);
  };

  const handleTouchStart = () => {
    setIsMouseDown(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    e.preventDefault();
    if (wrapperRef.current) {
      const x = e.pageX - wrapperRef.current?.offsetLeft;
      const walk = x - startX;
      wrapperRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleScrolling = useCallback(() => {
    if (isFirstRender) {
      scrollToCurrentYear(wrapperRef, +`${manageCurrentPosition(year)}`, 'auto');
    } else {
      scrollToCurrentYear(wrapperRef, +`${manageCurrentPosition(year)}`, 'smooth');
    }
  }, [manageCurrentPosition, isFirstRender, wrapperRef, year]);

  useEffect(() => {
    setSelectedYear(currentYear);
    handleScrolling();
  }, [
    year,
    currentYear,
    isFirstRender,
    manageCurrentPosition,
    setSelectedYear,
    wrapperRef,
    handleScrolling,
  ]);

  useEffect(() => {
    setIsFirstRender(false);
  }, [setIsFirstRender, isFirstRender]);

  return (
    <StyledYearBar>
      <StyledGradient className="left" />
      <StyledWrapper
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
        onMouseUp={(e) => handleMouseUp(e)}
        onMouseMove={(e) => handleMouseMove(e)}
        onTouchEnd={(e) => handleTouchEnd(e)}
        onTouchStart={() => handleTouchStart()}
        className={isMouseDown ? 'active' : ''}
        ref={wrapperRef}
      >
        {boxes.map(({ value }) => (
          <StyledYear id={`${value}`} key={value}>
            {value}
          </StyledYear>
        ))}
      </StyledWrapper>
      <StyledGradient className="right" />
    </StyledYearBar>
  );
};

export default YearBar;
