export interface Day {
  [key: string]: any;
  value: number;
  class: string;
}

export interface IDaysGrid {
  setIsAnimationStart: (state: boolean) => void;
  handleOnClick: (day: Day) => void;
  animationClassName: string;
  isAnimationStart: boolean;
  currentDay: number;
  days: Day[];
}
