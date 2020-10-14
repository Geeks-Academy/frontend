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
  const containerRef = useRef<HTMLDivElement>(null);

  const [isAnimationStart, setIsAnimationStart] = useState(false);
  const [animationClassName, setAnimationClassName] = useState('');

  const [isOpenState, setIsOpenState] = useState(isOpen);
  const [today] = useState(new Date());
  const [selectedDay, setselectedDay] = useState(today.getDate());
  const [selectedMonth, setselectedMonth] = useState(today.getMonth() + 1);
  const [selectedYear, setselectedYear] = useState(today.getFullYear());
  const [currentDateString, setCurrentDateString] = useState(
    currentDateToString(selectedDay, selectedMonth, selectedYear)
  );
  const [amountOfDaysInMonth, setAmountOfDaysInMonth] = useState(
    daysInMonth(selectedMonth, selectedYear)
  );
  const [selectedDays, setselectedDays] = useState(
    getDaysArray(selectedYear, selectedMonth, amountOfDaysInMonth)
  );

  useOutsideClick(containerRef, () => {
    setIsOpenState(false);
  });

  const modifyselectedMonth = (type: string) => {
    setIsAnimationStart(true);
    if (type === 'INCREMENT') {
      setAnimationClassName('prev');
      if (selectedMonth === 12) {
        setselectedMonth(1);
        setselectedYear(selectedYear + 1);
        return;
      }
      setselectedMonth(selectedMonth + 1);
    }
    if (type === 'DECREMENT') {
      setAnimationClassName('next');

      if (selectedMonth <= 1) {
        setselectedMonth(12);
        setselectedYear(selectedYear - 1);
        return;
      }
      setselectedMonth(selectedMonth - 1);
    }
  };

  const handleOnClick = (day: Days) => {
    const { value, class: className } = day;
    switch (className) {
      case 'prevDay':
        setselectedDay(value);
        modifyselectedMonth('DECREMENT');
        break;
      case 'nextDay':
        setselectedDay(value);
        modifyselectedMonth('INCREMENT');
        break;
      default:
        setselectedDay(value);
        break;
    }
  };

  const handleOnChange = (e: any) => {
    const { value } = e.target;
    const dateArray = value.split('-');
    const [year, month, day] = dateArray;
    const selectedDaysInMonth = daysInMonth(+month, +year);

    if (+year && +month <= 12 && +month > 0 && +day > 0 && +day <= selectedDaysInMonth) {
      setselectedDay(+day);
      setselectedMonth(+month);
      setselectedYear(+year);
    } else {
      setselectedDay(today.getDate());
      setselectedMonth(today.getMonth() + 1);
      setselectedYear(today.getFullYear());
    }
  };

  useEffect(() => {
    setCurrentDateString(currentDateToString(selectedDay, selectedMonth, selectedYear));
    setAmountOfDaysInMonth(daysInMonth(selectedMonth, selectedYear));
    setselectedDays(getDaysArray(selectedYear, selectedMonth, amountOfDaysInMonth));
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
            handleRightArrow={() => modifyselectedMonth('INCREMENT')}
            handleLeftArrow={() => modifyselectedMonth('DECREMENT')}
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
