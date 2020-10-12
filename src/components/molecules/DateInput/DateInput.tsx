import React, { useEffect, useState } from 'react';
import { IDateInput, daysOfTheWeek, months } from './DateInput.model';
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

const DateInput = ({ isOpen, labelName }: IDateInput): JSX.Element => {
  const [isOpenState, setIsOpenState] = useState(isOpen);
  const [today, setToday] = useState(new Date());
  const [currentDay, setCurrentDay] = useState(today.getDate());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentDateString, setCurrentDateString] = useState(
    currentDateToString(currentDay, currentMonth, currentYear)
  );
  const [amountOfDaysInMonth, setAmountOfDaysInMonth] = useState(
    daysInMonth(currentMonth, currentYear)
  );
  const [currentDays, setCurrentDays] = useState(
    getDaysArray(currentYear, currentMonth, amountOfDaysInMonth)
  );

  useEffect(() => {
    setCurrentDateString(currentDateToString(currentDay, currentMonth, currentYear));
    setToday(new Date(currentDateToString(currentYear, currentMonth, currentDay)));
    setAmountOfDaysInMonth(daysInMonth(currentMonth, currentYear));
    setCurrentDays(getDaysArray(currentYear, currentMonth, amountOfDaysInMonth));
  }, [currentDay, currentMonth, currentYear, amountOfDaysInMonth]);

  const modifyCurrentMonth = (type: string) => {
    if (type === 'INCREMENT') {
      if (currentMonth === 12) {
        setCurrentMonth(1);
        setCurrentYear(currentYear + 1);
        return;
      }
      setCurrentMonth(currentMonth + 1);
    }
    if (type === 'DECREMENT') {
      if (currentMonth <= 1) {
        setCurrentMonth(12);
        setCurrentYear(currentYear - 1);
        return;
      }
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleOnClick = (day: Days) => {
    const { value, class: className } = day;
    switch (className) {
      case 'prevDay':
        setCurrentDay(value);
        modifyCurrentMonth('DECREMENT');
        break;
      case 'nextDay':
        setCurrentDay(value);
        modifyCurrentMonth('INCREMENT');
        break;
      default:
        setCurrentDay(value);
        break;
    }
  };

  return (
    <StyledDateInput>
      <StyledLabel>{labelName}</StyledLabel>
      <StyledTopWrapper>
        <StyledInput placeholder={currentDateString} />
        <StyledCalendarIcon onClick={() => setIsOpenState(!isOpenState)} />
      </StyledTopWrapper>
      {isOpenState && (
        <StyledBottomWrapper>
          <MonthSwiper
            month={months[currentMonth - 1]}
            handleLeftArrow={() => modifyCurrentMonth('DECREMENT')}
            handleRightArrow={() => modifyCurrentMonth('INCREMENT')}
          />
          <DaysBar daysOfTheWeek={daysOfTheWeek} />
          <DaysGrid days={currentDays} currentDay={currentDay} handleOnClick={handleOnClick} />
          <YearBar year={currentYear} />
        </StyledBottomWrapper>
      )}
    </StyledDateInput>
  );
};

export default DateInput;
