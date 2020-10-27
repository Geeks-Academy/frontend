import { Constants } from './constants';
import { ScrollType } from './DateInput.model';
import { Day } from './DaysGrid/DaysGrid.model';

export const currentDateToString = (day: number, month: number, year: number) => {
  const dayString = `${day}`;
  const monthString = `${month}`;
  return `${year}-${monthString.padStart(2, '0')}-${dayString.padStart(2, '0')}`;
};

export const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

export const getFilledArray = (max: number) => {
  return Array.from({ length: max }, (v, k) => k + 1);
};

export const getYearsArray = (minYear: number, maxYear: number) => {
  const amountOfElements = maxYear - minYear + 1;

  const array = getFilledArray(amountOfElements).map((element) => ({
    value: element + minYear - 1,
    position: (element - 1) * Constants.yearBoxWidth,
  }));
  return array;
};

export const getDaysArray = (year: number, month: number, amountOfDaysInMonth: number) => {
  const tempDate = new Date(currentDateToString(1, month, year));
  const firstDayOfMonth = tempDate.getDay();
  const amountOfprevMonthDays = getDaysInMonth(month === 1 ? 12 : month - 1, year);

  const mapArray = (array: number[], className: string) => {
    return array.map((day) => ({ value: day, class: className }));
  };

  const filterPrevMonthDays = () => {
    const filledArray = getFilledArray(amountOfprevMonthDays);
    switch (firstDayOfMonth) {
      case 0: {
        const tempArray = filledArray.filter((day) => day > amountOfprevMonthDays - 6);
        return mapArray(tempArray, 'prevDay');
      }
      case 1:
        return [];
      default: {
        const tempArray = filledArray.filter(
          (day) => day >= amountOfprevMonthDays - firstDayOfMonth + 2
        );
        return mapArray(tempArray, 'prevDay');
      }
    }
  };

  const getFinalArray = (array: Day[]) => {
    array.forEach((obj, index) => {
      const modifiedObject: Day = obj;
      modifiedObject.id = index;
    });
    return array;
  };

  const prevMonthDays = filterPrevMonthDays();
  const fillteredCurrentMonthDays = getFilledArray(amountOfDaysInMonth).filter(
    (day) => day <= amountOfDaysInMonth
  );
  const currentMonthDays = mapArray(fillteredCurrentMonthDays, 'currentDay');
  const currentLength = [...prevMonthDays, ...currentMonthDays].length;
  const fillteredNextMonthDays = getFilledArray(amountOfDaysInMonth).filter(
    (day) => day <= Constants.gridDays - currentLength
  );
  const nextMonthDays = mapArray(fillteredNextMonthDays, 'nextDay');
  const valuesArray = [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];

  return getFinalArray(valuesArray);
};

export const scrollToCurrentYear = (
  element: React.RefObject<HTMLElement>,
  position: number,
  behavior: ScrollType = 'smooth'
) => {
  element.current?.scrollTo({ left: position, behavior });
};

export const removeYearClasses = (ref: React.RefObject<HTMLElement>) => {
  if (ref.current) {
    Array.from(ref.current?.children).filter((element) =>
      element.classList.remove('first', 'center', 'second')
    );
  }
};

export const addYearClasses = (ref: React.RefObject<HTMLElement>, currentYear: number) => {
  if (ref.current) {
    Array.from(ref.current?.children).forEach((element) => {
      switch (+element.id) {
        case currentYear - 1:
        case currentYear + 1:
          element.classList.add('first');
          break;
        case currentYear:
          element.classList.add('center');
          break;
        case currentYear + 2:
        case currentYear - 2:
          element.classList.add('second');
          break;
        default:
          break;
      }
    });
  }
};
