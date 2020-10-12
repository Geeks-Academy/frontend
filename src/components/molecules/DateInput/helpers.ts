import { Days } from './DaysGrid/DaysGrid.model';

export const currentDateToString = (day: number, month: number, year: number) => {
  return `${day !== 0 ? day : '01'}-${month < 10 ? `0${month}` : month}-${year}`;
};

export const daysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

export const fillArray = (max: number) => {
  return Array.from({ length: max }, (v, k) => k + 1);
};

export const getDaysArray = (year: number, month: number, amountOfDaysInMonth: number) => {
  const tempDate = new Date(currentDateToString(year, month, 1));
  const firstDayOfMonth = tempDate.getDay();
  const amountOfprevMonthDays = daysInMonth(month === 1 ? 12 : month - 1, year);

  const filterPrevMonthDays = () => {
    const filledArray = fillArray(amountOfprevMonthDays);
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
  const currentMonthDays = fillArray(amountOfDaysInMonth)
    .filter((day) => day <= amountOfDaysInMonth)
    .map((day) => {
      return { value: day, class: 'currentDay' };
    });
  const currentLength = [...prevMonthDays, ...currentMonthDays].length;
  const nextMonthDays = fillArray(amountOfprevMonthDays)
    .filter((day) => day <= 42 - currentLength)
    .map((day) => {
      return { value: day, class: 'nextDay' };
    });
  const valuesArray = [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];

  return getFinalArray(valuesArray);
};
