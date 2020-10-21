import { Days } from './DaysGrid/DaysGrid.model';

export const currentDateToString = (day: number, month: number, year: number) => {
  return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
};

export const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

export const getFilledArray = (max: number) => {
  return Array.from({ length: max }, (v, k) => k + 1);
};

export const getYearsArray = (minYear: number, maxYear: number) => {
  const amountOfElements = maxYear - minYear + 1;
  const array = getFilledArray(amountOfElements).map((element) => {
    return { value: element + minYear - 1, position: (element - 1) * 72 };
  });
  return array;
};

export const getDaysArray = (year: number, month: number, amountOfDaysInMonth: number) => {
  const tempDate = new Date(currentDateToString(year, month, 1));
  const firstDayOfMonth = tempDate.getDay();
  const amountOfprevMonthDays = getDaysInMonth(month === 1 ? 12 : month - 1, year);

  const filterPrevMonthDays = () => {
    const filledArray = getFilledArray(amountOfprevMonthDays);
    if (firstDayOfMonth === 0) {
      return filledArray
        .filter((day) => day > amountOfprevMonthDays - 6)
        .map((day) => {
          return { value: day, class: 'prevDay' };
        });
    }
    if (firstDayOfMonth === 1) {
      return [];
    }
    return filledArray
      .filter((day) => day >= amountOfprevMonthDays - firstDayOfMonth + 2)
      .map((day) => {
        return { value: day, class: 'prevDay' };
      });
  };

  const getFinalArray = (array: Days[]) => {
    const tempArray = [];
    for (let i = 0; i < array.length; i += 1) {
      const modifiedObject: Days = array[i];
      modifiedObject.id = i;
      tempArray.push(modifiedObject);
    }
    return tempArray;
  };

  const prevMonthDays = filterPrevMonthDays();
  const currentMonthDays = getFilledArray(amountOfDaysInMonth)
    .filter((day) => day <= amountOfDaysInMonth)
    .map((day) => {
      return { value: day, class: 'currentDay' };
    });

  const currentLength = [...prevMonthDays, ...currentMonthDays].length;
  const nextMonthDays = getFilledArray(amountOfprevMonthDays)
    .filter((day) => day <= 42 - currentLength)
    .map((day) => {
      return { value: day, class: 'nextDay' };
    });
  const valuesArray = [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];

  return getFinalArray(valuesArray);
};

export const scrollToCurrentYear = (element: any, position: number, behavior = 'smooth'): void => {
  switch (behavior) {
    case 'smooth':
      element.current?.scrollTo({ left: position, behavior: 'smooth' });
      break;

    case 'auto':
      element.current?.scrollTo({ left: position, behavior: 'auto' });
      break;

    default:
      element.current?.scrollTo({ left: position, behavior: undefined });
  }
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
        case currentYear:
          element.classList.add('center');
          break;
        case currentYear - 1:
          element.classList.add('first');
          break;
        case currentYear + 1:
          element.classList.add('first');
          break;
        case currentYear + 2:
          element.classList.add('second');
          break;
        case currentYear - 2:
          element.classList.add('second');
          break;
        default:
      }
    });
  }
};
