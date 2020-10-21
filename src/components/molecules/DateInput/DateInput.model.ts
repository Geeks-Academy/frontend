export interface IDateInput {
  isOpen?: boolean;
  labelName: string;
  minYear: number;
  maxYear: number;
  handleDate: (date: string) => void;
}

export type SwipeType = 'INCREMENT' | 'DECREMENT' | null;
export enum SwipeOption {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

export const daysOfTheWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

export const months = [
  'January',
  'February',
  'March',
  'April',
  'Mai',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
