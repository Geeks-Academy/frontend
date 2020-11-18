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

  const [accelerateInterval, setAccelerateInterval] = useState(0);
  const [boxes] = useState(getYearsArray(minYear, maxYear));
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [timeInterval, setTimeInterval] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [currentYear, setCurrentYear] = useState(year);
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
    scrollToCurrentYear(wrapperRef, +`${getBoxPosition(currentYear)}`, 'smooth');
  }, [getBoxPosition, wrapperRef, currentYear]);

  const clampValue = (value: number, min: number, max: number) => {
    if (value <= min) {
      return min;
    }
    if (value >= max) {
      return max;
    }
    return value;
  };

  const getMovementSign = () => (movementX > 0 ? 1 : -1);
  const accelerateScroll = () => {
    setAccelerateInterval(
      setInterval(() => {
        if (wrapperRef.current) {
          setScrollPosition(
            (wrapperRef.current.scrollLeft -=
              getMovementSign() *
              clampValue(movementX, Constants.minMovementX, Constants.maxMovementX))
          );
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
    setScrollVelocity(0);
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
    setScrollingState(true);
    if (wrapperRef.current) {
      const x = e.pageX - wrapperRef.current?.offsetLeft;
      const walk = x - startX;
      wrapperRef.current.scrollLeft = scrollPosition - walk;
    }
  };

  const onMouseLeave = () => {
    setIsMouseDown(false);
    if (isMouseDown) {
      setScrollingState(false);
    }
    manageCurrentYear();
    handleScrolling();
  };

  // TouchEvents

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    setScrollPosition(e.changedTouches[0].pageX);
    manageCurrentYear();
    setScrollingState(true);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    clearScrollParameters();
    clearInterval(timeInterval);
    setScrollingState(false);
    if (wrapperRef.current) {
      setStartX(e.changedTouches[0].pageX - wrapperRef.current.offsetLeft);
      setScrollPosition(wrapperRef.current.scrollLeft);
    }
  };
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    clearScrollParameters();
    setScrollingState(false);
    clearInterval(timeInterval);
    clearInterval(accelerateInterval);
    if (wrapperRef.current) {
      setStartX(e.pageX - wrapperRef.current.offsetLeft);
      setScrollPosition(wrapperRef.current.scrollLeft);
    }
  };

  const onMouseUp = () => {
    setIsMouseDown(false);
    if (!isMobileDevice() && (movementX >= 0.66 || movementX <= -0.66)) {
      accelerateScroll();
      setScrollingState(true);
      setTimeInterval(
        setInterval(() => {
          setScrollTime((prev) => prev + 15);
        }, 1)
      );
    } else {
      handleScrolling();
    }
  };
  const onTouchEnd = () => {
    setIsMouseDown(false);
    setScrollingState(true);
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
    setScrollVelocity(+(Constants.scrollRoad / scrollTime).toFixed(5));
  }, [scrollTime]);

  useEffect(() => {
    setIsFirstRender(false);
  }, [setIsFirstRender, isFirstRender]);

  useEffect(() => {
    if (scrollingState) {
      setSelectedYear(currentYear);
    }
  }, [scrollingState, setSelectedYear, currentYear]);

  useEffect(() => {
    if (!scrollingState) {
      setCurrentYear(year);
      scrollToCurrentYear(wrapperRef, +`${getBoxPosition(year)}`, 'smooth');
    }
  }, [year, getBoxPosition, scrollingState]);

  useEffect(() => {
    handleRemoveClass(wrapperRef);
    handleAddClass(wrapperRef, currentYear);
  }, [wrapperRef, currentYear, handleRemoveClass, handleAddClass]);

  useEffect(() => {
    manageScrollVelocity();
  }, [scrollTime, manageScrollVelocity]);

  useEffect(() => {
    if (scrollingState && scrollVelocity < Constants.scrollingBorder) {
      // 3
      handleScrolling();
    }
  }, [handleScrolling, scrollVelocity, scrollingState]);

  useEffect(() => {
    // 1
    if (scrollVelocity < Constants.clearBorder && scrollTime > 1000) {
      setScrollingState(false);
      clearTimeInterval();
      clearAccelerateInterval();
    }
  }, [scrollVelocity, scrollTime, clearAccelerateInterval, clearTimeInterval]);

  useEffect(() => {
    if (isFirstRender) {
      scrollToCurrentYear(wrapperRef, +`${getBoxPosition(currentYear)}`, 'auto');
    }
  }, [isFirstRender, wrapperRef, currentYear, getBoxPosition]);

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
