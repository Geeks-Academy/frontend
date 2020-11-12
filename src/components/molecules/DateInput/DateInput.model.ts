export type SwipeType = 'INCREMENT' | 'DECREMENT' | null;
export type ScrollType = 'auto' | 'smooth' | undefined;

export interface IDateInput {
  isOpen?: boolean;
  label?: string;
  onClick: (date: string) => void;
}

export enum SwipeOption {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

export const daysOfTheWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']; // utilsy

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
