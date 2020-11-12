import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import WeekBar from './WeekBar';
import MonthSwiper from './MonthSwiper';
import DaysGrid from './DaysGrid';
import YearBar from './YearBar';
import { Constants } from './constants';
import { Day } from './DaysGrid/DaysGrid.model';
import {
  StyledBottomWrapper,
  StyledCalendarIcon,
  StyledDateInput,
  StyledInput,
  StyledLabel,
  StyledTopWrapper,
} from './DateInput.styled';
import {
  addYearClasses,
  currentDateToString,
  getDaysArray,
  getDaysInMonth,
  removeYearClasses,
} from './helpers';
import { IDateInput, SwipeOption, SwipeType, daysOfTheWeek } from './DateInput.model';

const DateInput = ({ isOpen, label, onClick }: IDateInput): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [today] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(today.getDate());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [inputText, setInputText] = useState('');
  const [isAnimationStart, setIsAnimationStart] = useState(false);
  const [animationClassName, setAnimationClassName] = useState('');
  const [isOpenState, setIsOpenState] = useState(isOpen);
  const [currentDateString, setCurrentDateString] = useState(
    currentDateToString(selectedDay, selectedMonth, selectedYear)
  );
  const [amountOfDaysInMonth, setAmountOfDaysInMonth] = useState(
    getDaysInMonth(selectedMonth, selectedYear)
  );
  const [selectedDays, setSelectedDays] = useState(
    getDaysArray(selectedYear, selectedMonth, amountOfDaysInMonth)
  );
  const [disabledLeftButton, setDisabledLeftButton] = useState(false);
  const [disabledRightButton, setDisabledRightButton] = useState(false);

  const handleArrowButtons = useCallback(() => {
    setDisabledLeftButton(selectedYear <= Constants.minYear && selectedMonth < 2);
    setDisabledRightButton(selectedYear >= Constants.maxYear && selectedMonth > 11);
  }, [selectedMonth, selectedYear]);

  const swipeMonth = (swipeType: SwipeType) => {
    if (swipeType === SwipeOption.INCREMENT) {
      const daysInNextMonth = getDaysInMonth(
        selectedMonth === 12 ? 1 : selectedMonth + 1,
        selectedYear
      );
      if (selectedDay > daysInNextMonth) {
        setSelectedDay(daysInNextMonth);
      }
      if (selectedMonth === 12) {
        setSelectedMonth(1);
        setSelectedYear(selectedYear + 1);
        return;
      }
      setSelectedMonth(selectedMonth + 1);
    }
    if (swipeType === SwipeOption.DECREMENT) {
      const daysInPrevMonth = getDaysInMonth(
        selectedMonth <= 1 ? 12 : selectedMonth - 1,
        selectedYear
      );

      if (selectedDay > daysInPrevMonth) {
        setSelectedDay(daysInPrevMonth);
      }
      if (selectedMonth <= 1) {
        setSelectedMonth(12);
        setSelectedYear(selectedYear - 1);
        return;
      }
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const handleOnClick = (day: Day) => {
    const { value, class: className } = day;
    setSelectedDay(value);

    switch (className) {
      case 'prevDay':
        swipeMonth(SwipeOption.DECREMENT);
        break;
      case 'nextDay':
        swipeMonth(SwipeOption.INCREMENT);
        break;
      default:
        break;
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    const dateArray = value.split('-');
    const [year, month, day] = dateArray;
    const selectedDaysInMonth = getDaysInMonth(+month, +year);

    setInputText(value);
    if (
      +year >= Constants.minYear &&
      +year <= Constants.maxYear &&
      +month <= 12 &&
      +month > 0 &&
      +day > 0 &&
      +day <= selectedDaysInMonth
    ) {
      setSelectedDay(+day);
      setSelectedMonth(+month);
      setSelectedYear(+year);
    } else {
      setSelectedDay(selectedDay);
      setSelectedMonth(selectedMonth);
      setSelectedYear(selectedYear);
    }
  };

  const twinkleAnimation = () => {
    setAnimationClassName('twinkle');
    setIsAnimationStart(true);
  };

  useEffect(() => {
    setCurrentDateString(currentDateToString(selectedDay, selectedMonth, selectedYear));
    setSelectedDays(getDaysArray(selectedYear, selectedMonth, amountOfDaysInMonth));
    setInputText(currentDateToString(selectedDay, selectedMonth, selectedYear));
    setAmountOfDaysInMonth(getDaysInMonth(selectedMonth, selectedYear));
  }, [selectedDay, selectedMonth, selectedYear, amountOfDaysInMonth]);

  useEffect(() => {
    onClick(currentDateToString(selectedDay, selectedMonth, selectedYear));
    handleArrowButtons();
  }, [selectedDay, selectedMonth, selectedYear, onClick, currentDateString, handleArrowButtons]);

  useEffect(() => {
    twinkleAnimation();
  }, [selectedMonth]);

  return (
    <StyledDateInput>
      <StyledLabel>{label}</StyledLabel>
      <StyledTopWrapper>
        <StyledInput
          handleOnFocus={() => setIsOpenState(true)}
          handleOnChange={(e) => handleOnChange(e)}
          placeholder={currentDateString}
          inputRef={inputRef}
          value={inputText}
          type="text"
        />
        <StyledCalendarIcon onClick={() => setIsOpenState(!isOpenState)} />
      </StyledTopWrapper>
      {isOpenState && (
        <StyledBottomWrapper>
          <MonthSwiper
            handleRightArrow={() => swipeMonth(SwipeOption.INCREMENT)}
            handleLeftArrow={() => swipeMonth(SwipeOption.DECREMENT)}
            isRightButtonDisabled={disabledRightButton}
            isLeftButtonDisabled={disabledLeftButton}
            setIsAnimationStart={setIsAnimationStart}
            animationClassName={animationClassName}
            isAnimationStart={isAnimationStart}
            monthNumber={selectedMonth - 1}
          />
          <WeekBar daysOfTheWeek={daysOfTheWeek} />
          <DaysGrid
            setIsAnimationStart={setIsAnimationStart}
            animationClassName={animationClassName}
            isAnimationStart={isAnimationStart}
            handleOnClick={handleOnClick}
            currentDay={selectedDay}
            days={selectedDays}
          />
          <YearBar
            handleRemoveClass={removeYearClasses}
            setSelectedYear={setSelectedYear}
            handleAddClass={addYearClasses}
            minYear={Constants.minYear}
            maxYear={Constants.maxYear}
            year={selectedYear}
          />
        </StyledBottomWrapper>
      )}
    </StyledDateInput>
  );
};

export default DateInput;