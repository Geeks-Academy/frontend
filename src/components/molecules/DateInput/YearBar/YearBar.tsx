import React, { useCallback, useEffect, useRef, useState } from 'react';
import { getYearsArray, isMobileDevice, scrollToCurrentYear } from '../helpers';
import { StyledGradient, StyledWrapper, StyledYear, StyledYearBar } from './YearBar.styled';
import { Constants } from '../constants';
import { IYearBar } from './YearBar.model';

const YearBar = ({
  handleRemoveClass,
  setSelectedYear,
  handleAddClass,
  minYear,
  maxYear,
  year,
}: IYearBar): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [accelerateInterval, setAccelerateInterval] = useState(0);
  const [boxes] = useState(getYearsArray(minYear, maxYear));
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [timeInterval, setTimeInterval] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [currentYear, setCurrentYear] = useState(year);
  const [scrollRoad, setScrollRoad] = useState(0);
  const [scrollTime, setScrollTime] = useState(1);
  const [movementX, setMovementX] = useState(0);
  const [startX, setStartX] = useState(0);
  const [scrollingState, setScrollingState] = useState(false);

  const getBoxPosition = useCallback(
    (selectedYear: number) => {
      return boxes.find((element) => element.value === selectedYear)?.position;
    },
    [boxes]
  );

  const handleScrolling = useCallback(() => {
    if (isFirstRender) {
      scrollToCurrentYear(wrapperRef, +`${getBoxPosition(currentYear)}`, 'auto');
    } else {
      scrollToCurrentYear(wrapperRef, +`${getBoxPosition(currentYear)}`, 'smooth');
    }
  }, [getBoxPosition, isFirstRender, wrapperRef, currentYear]);

  const accelerateScroll = () => {
    setAccelerateInterval(
      setInterval(() => {
        if (wrapperRef.current) {
          setScrollPosition((wrapperRef.current.scrollLeft -= movementX * 1.25));
        }
      })
    );
  };

  const manageCurrentYear = () => {
    if (wrapperRef.current) {
      boxes.forEach(({ position, value }) => {
        if (
          +`${wrapperRef.current?.scrollLeft}` < position + Constants.yearBoxWidth / 2 &&
          +`${wrapperRef.current?.scrollLeft}` > position - Constants.yearBoxWidth / 2
        ) {
          setCurrentYear(value);
        }
      });
    }
  };

  const clearScrollParameters = () => {
    setLastScrollPosition(scrollPosition);
    setScrollVelocity(0);
    setScrollRoad(scrollPosition);
    setScrollTime(1);
  };

  const clearTimeInterval = useCallback(() => {
    clearInterval(timeInterval);
  }, [timeInterval]);

  const clearAccelerateInterval = useCallback(() => {
    setMovementX(0);
    clearInterval(accelerateInterval);
  }, [accelerateInterval]);

  // MouseEvents

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    e.preventDefault();
    setMovementX(e.movementX / Constants.movementDenominator);
    manageCurrentYear();
    if (wrapperRef.current) {
      const x = e.pageX - wrapperRef.current?.offsetLeft;
      const walk = x - startX;
      wrapperRef.current.scrollLeft = scrollPosition - walk;
    }
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    clearScrollParameters();
    setScrollingState(true);
    clearInterval(timeInterval);
    clearInterval(accelerateInterval);
    if (wrapperRef.current) {
      setStartX(e.pageX - wrapperRef.current.offsetLeft);
      setScrollPosition(wrapperRef.current.scrollLeft);
    }
  };

  const onMouseUp = () => {
    setIsMouseDown(false);
    if (!isMobileDevice()) {
      accelerateScroll();
    }
    setLastScrollPosition(+`${wrapperRef.current?.scrollLeft}`);
    setTimeInterval(
      setInterval(() => {
        setScrollTime((prev) => prev + 15);
      }, 1)
    );
  };

  const onMouseLeave = () => {
    setIsMouseDown(false);
    manageCurrentYear();
  };

  // TouchEvents

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    setScrollPosition(e.changedTouches[0].pageX);
    manageCurrentYear();
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    clearScrollParameters();
    setScrollingState(true);
    clearInterval(timeInterval);
    if (wrapperRef.current) {
      setStartX(e.changedTouches[0].pageX - wrapperRef.current.offsetLeft);
      setScrollPosition(wrapperRef.current.scrollLeft);
    }
  };

  const onTouchEnd = () => {
    setIsMouseDown(false);
    setLastScrollPosition(+`${wrapperRef.current?.scrollLeft}`);
    setTimeInterval(
      setInterval(() => {
        setScrollTime((prev) => prev + 15);
      }, 1)
    );
  };

  const onScroll = () => {
    if (!isMouseDown) {
      setScrollPosition(+`${wrapperRef.current?.scrollLeft}`);
      manageCurrentYear();
    }
  };

  const manageScrollVelocity = useCallback(() => {
    setScrollVelocity(+(scrollRoad / scrollTime).toFixed(5));
  }, [scrollRoad, scrollTime]);

  useEffect(() => {
    setIsFirstRender(false);
  }, [setIsFirstRender, isFirstRender]);

  useEffect(() => {
    if (scrollingState) {
      setSelectedYear(currentYear);
    }
  }, [currentYear, scrollingState, setSelectedYear]);

  useEffect(() => {
    setCurrentYear(year);
    scrollToCurrentYear(wrapperRef, +`${getBoxPosition(year)}`, 'smooth');
  }, [year, getBoxPosition]);

  useEffect(() => {
    handleRemoveClass(wrapperRef);
    handleAddClass(wrapperRef, currentYear);
  }, [wrapperRef, currentYear, handleRemoveClass, handleAddClass]);

  useEffect(() => {
    setScrollRoad(Math.abs(+`${wrapperRef.current?.scrollLeft}` - lastScrollPosition));
  }, [wrapperRef.current?.scrollLeft, lastScrollPosition]);

  useEffect(() => {
    manageScrollVelocity();
  }, [scrollTime, scrollRoad, manageScrollVelocity]);

  useEffect(() => {
    if (scrollingState && scrollVelocity < Constants.scrollingBorder) {
      handleScrolling();
    }
  }, [clearTimeInterval, clearAccelerateInterval, handleScrolling, scrollVelocity, scrollingState]);

  useEffect(() => {
    if (scrollVelocity < Constants.clearBorder && scrollTime > 1000) {
      setScrollingState(false);
      clearTimeInterval();
      clearAccelerateInterval();
    }
  }, [scrollVelocity, clearAccelerateInterval, scrollTime, clearTimeInterval]);

  return (
    <StyledYearBar>
      <StyledGradient className="left" />
      <StyledWrapper onScroll={onScroll} className={isMouseDown ? 'active' : ''} ref={wrapperRef}>
        {boxes.map(({ value }) => (
          <StyledYear
            onTouchStart={(e) => onTouchStart(e)}
            onMouseMove={(e) => onMouseMove(e)}
            onMouseDown={(e) => onMouseDown(e)}
            onTouchMove={(e) => onTouchMove(e)}
            onMouseLeave={onMouseLeave}
            onTouchEnd={onTouchEnd}
            onMouseUp={onMouseUp}
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
