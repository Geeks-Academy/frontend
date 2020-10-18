import React, { useEffect, useRef, useState } from 'react';
import { useOutsideClick } from 'hooks';
import { IDateInput, daysOfTheWeek } from './DateInput.model';
import {
  StyledBottomWrapper,
  StyledCalendarIcon,
  StyledDateInput,
  StyledInput,
  StyledLabel,
  StyledTopWrapper,
} from './DateInput.styled';
import DaysBar from './WeekBar';
import MonthSwiper from './MonthSwiper';
import { currentDateToString, daysInMonth, getDaysArray } from './helpers';
import DaysGrid from './DaysGrid';
import YearBar from './YearBar';
import { Days } from './DaysGrid/DaysGrid.model';

const DateInput = ({ isOpen, labelName, handleDate }: IDateInput): JSX.Element => {
  const containerRef = useRef(null);

  const [today] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(today.getDate());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [currentDateString, setCurrentDateString] = useState(
    currentDateToString(selectedDay, selectedMonth, selectedYear)
  );
  const [amountOfDaysInMonth, setAmountOfDaysInMonth] = useState(
    daysInMonth(selectedMonth, selectedYear)
  );
  const [selectedDays, setSelectedDays] = useState(
    getDaysArray(selectedYear, selectedMonth, amountOfDaysInMonth)
  );
  const [isAnimationStart, setIsAnimationStart] = useState(false);
  const [animationClassName, setAnimationClassName] = useState('');
  const [isOpenState, setIsOpenState] = useState(isOpen);

  useOutsideClick(containerRef, () => {
    setIsOpenState(false);
  });

  const modifySelectedMonth = (type: string) => {
    setIsAnimationStart(true);
    if (type === 'INCREMENT') {
      setAnimationClassName('prev');
      if (selectedMonth === 12) {
        setSelectedMonth(1);
        setSelectedYear(selectedYear + 1);
        return;
      }
      setSelectedMonth(selectedMonth + 1);
    }
    if (type === 'DECREMENT') {
      setAnimationClassName('next');

      if (selectedMonth <= 1) {
        setSelectedMonth(12);
        setSelectedYear(selectedYear - 1);
        return;
      }
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const handleOnClick = (day: Days) => {
    const { value, class: className } = day;
    switch (className) {
      case 'prevDay':
        setSelectedDay(value);
        modifySelectedMonth('DECREMENT');
        break;
      case 'nextDay':
        setSelectedDay(value);
        modifySelectedMonth('INCREMENT');
        break;
      default:
        setSelectedDay(value);
        break;
    }
  };

  const handleOnChange = (e: any) => {
    const { value } = e.target;
    const dateArray = value.split('-');
    const [year, month, day] = dateArray;
    const selectedDaysInMonth = daysInMonth(+month, +year);

    if (+year >= 1900 && +month <= 12 && +month > 0 && +day > 0 && +day <= selectedDaysInMonth) {
      setSelectedDay(+day);
      setSelectedMonth(+month);
      setSelectedYear(+year);
    } else {
      setSelectedDay(today.getDate());
      setSelectedMonth(today.getMonth() + 1);
      setSelectedYear(today.getFullYear());
    }
  };

  useEffect(() => {
    setCurrentDateString(currentDateToString(selectedDay, selectedMonth, selectedYear));
    setAmountOfDaysInMonth(daysInMonth(selectedMonth, selectedYear));
    setSelectedDays(getDaysArray(selectedYear, selectedMonth, amountOfDaysInMonth));
  }, [selectedDay, selectedMonth, selectedYear, amountOfDaysInMonth]);

  useEffect(() => {
    handleDate(currentDateString);
  }, [currentDateString, handleDate]);

  return (
    <StyledDateInput ref={containerRef}>
      <StyledLabel>{labelName}</StyledLabel>
      <StyledTopWrapper>
        <StyledInput
          type="text"
          placeholder={currentDateString}
          handleOnChange={(e) => handleOnChange(e)}
        />
        <StyledCalendarIcon onClick={() => setIsOpenState(!isOpenState)} />
      </StyledTopWrapper>
      {isOpenState && (
        <StyledBottomWrapper>
          <MonthSwiper
            handleRightArrow={() => modifySelectedMonth('INCREMENT')}
            handleLeftArrow={() => modifySelectedMonth('DECREMENT')}
            setIsAnimationStart={setIsAnimationStart}
            animationClassName={animationClassName}
            isAnimationStart={isAnimationStart}
            monthNumber={selectedMonth - 1}
          />
          <DaysBar daysOfTheWeek={daysOfTheWeek} />
          <DaysGrid
            setIsAnimationStart={setIsAnimationStart}
            animationClassName={animationClassName}
            isAnimationStart={isAnimationStart}
            handleOnClick={handleOnClick}
            currentDay={selectedDay}
            days={selectedDays}
          />
          <YearBar year={selectedYear} />
        </StyledBottomWrapper>
      )}
    </StyledDateInput>
  );
};

export default DateInput;
