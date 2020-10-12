export interface Days {
  value: number;
  class: string;
  [key: string]: any;
}

export interface IDaysGrid {
  days: Days[];
  currentDay: number;
}
