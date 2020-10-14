export interface Days {
  value: number;
  class: string;
  [key: string]: any;
}

export interface IDaysGrid {
  days: Days[];
  currentDay: number;
  handleOnClick: (day: Days) => void;
  isAnimationStart: boolean;
  animationClassName: string;
  setIsAnimationStart: (state: boolean) => void;
}
