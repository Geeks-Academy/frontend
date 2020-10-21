import React, { useCallback, useEffect, useRef, useState } from 'react';
import { getYearsArray, scrollToCurrentYear } from '../helpers';
import { IYearBar } from './YearBar.model';
import { StyledGradient, StyledWrapper, StyledYear, StyledYearBar } from './YearBar.styled';

const YearBar = ({
  year,
  minYear,
  maxYear,
  setSelectedYear,
  handleAddClass,
  handleRemoveClass,
}: IYearBar): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [startX, setStartX] = useState(0);
  const [currentYear, setCurrentYear] = useState(year);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [boxes] = useState(getYearsArray(minYear, maxYear));
  const [wasTheChangeInYearBar, setWasTheChangeInYearBar] = useState(true);

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
    setWasTheChangeInYearBar(true);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isMouseDown) {
      const selectedYear = +(e.target as HTMLDivElement).id;
      setCurrentYear(selectedYear);
    }
    setIsMouseDown(false);
    setWasTheChangeInYearBar(true);
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

  const manageCurrentPosition = useCallback(
    (selectedYear: number) => {
      return boxes.find((element) => element.value === +selectedYear)?.position;
    },
    [boxes]
  );

  const handleScrolling = useCallback(() => {
    if (isFirstRender) {
      scrollToCurrentYear(wrapperRef, +`${manageCurrentPosition(year)}`, 'auto');
    } else {
      scrollToCurrentYear(wrapperRef, +`${manageCurrentPosition(year)}`, 'smooth');
    }
  }, [manageCurrentPosition, isFirstRender, wrapperRef, year]);

  useEffect(() => {
    setWasTheChangeInYearBar(false);
  }, [setWasTheChangeInYearBar, wasTheChangeInYearBar]);

  useEffect(() => {
    if (wasTheChangeInYearBar) {
      setSelectedYear(currentYear);
    }
    handleScrolling();
  }, [
    year,
    currentYear,
    setSelectedYear,
    handleScrolling,
    wasTheChangeInYearBar,
    setWasTheChangeInYearBar,
  ]);

  useEffect(() => {
    handleRemoveClass(wrapperRef);
    handleAddClass(wrapperRef, year);
  }, [wrapperRef, year, handleRemoveClass, handleAddClass]);

  useEffect(() => {
    setIsFirstRender(false);
  }, [setIsFirstRender, isFirstRender]);

  return (
    <StyledYearBar>
      <StyledGradient className="left" />
      <StyledWrapper className={isMouseDown ? 'active' : ''} ref={wrapperRef}>
        {boxes.map(({ value }) => (
          <StyledYear
            onMouseDown={(e) => handleMouseDown(e)}
            onMouseLeave={(e) => handleMouseLeave(e)}
            onMouseUp={(e) => handleMouseUp(e)}
            onMouseMove={(e) => handleMouseMove(e)}
            onTouchEnd={(e) => handleTouchEnd(e)}
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
