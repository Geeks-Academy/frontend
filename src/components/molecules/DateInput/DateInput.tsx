import React, { useEffect, useState } from 'react';
import { IDateInput, months } from './DateInput.model';
import {
  StyledBottomWrapper,
  StyledCalendarIcon,
  StyledDateInput,
  StyledInput,
  StyledLabel,
  StyledTopWrapper,
} from './DateInput.styled';
import MonthSwiper from './MonthSwiper';

const currentDateToString = (day: number, month: number, year: number) => {
  return `${day !== 0 ? day : '01'}-${month < 10 ? `0${month}` : month}-${year}`;
};

const DateInput = ({ isOpen, labelName }: IDateInput): JSX.Element => {
  const today = new Date();

  const [currentDay] = useState(today.getDate());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);
  const [currentYear] = useState(today.getFullYear());
  const [currentDate, setCurrentDate] = useState(
    currentDateToString(currentDay, currentMonth, currentYear)
  );

  const [isOpenState, setIsOpenState] = useState(isOpen);

  useEffect(() => {
    setCurrentDate(currentDateToString(currentDay, currentMonth, currentYear));
  }, [currentDay, currentMonth, currentYear]);

  const modifyCurrentMonth = (type: string) => {
    if (type === 'INCREMENT') {
      if (currentMonth === 12) {
        setCurrentMonth(1);
        return;
      }
      setCurrentMonth(currentMonth + 1);
    }
    if (type === 'DECREMENT') {
      if (currentMonth <= 1) {
        setCurrentMonth(12);
        return;
      }
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleLeftArrow = () => {
    modifyCurrentMonth('DECREMENT');
    console.log('left');
  };

  const handleRightArrow = () => {
    modifyCurrentMonth('INCREMENT');
    console.log('right');
  };

  return (
    <StyledDateInput>
      <StyledLabel>{labelName}</StyledLabel>
      <StyledTopWrapper>
        <StyledInput placeholder={currentDate} />
        <StyledCalendarIcon onClick={() => setIsOpenState(!isOpenState)} />
      </StyledTopWrapper>
      {isOpenState && (
        <StyledBottomWrapper>
          <MonthSwiper
            month={months[currentMonth - 1]}
            handleLeftArrow={handleLeftArrow}
            handleRightArrow={handleRightArrow}
          />
        </StyledBottomWrapper>
      )}
    </StyledDateInput>
  );
};

export default DateInput;
