export interface IMonthSwiper {
  monthNumber: number;
  animationClassName: string;
  handleRightArrow: () => void;
  handleLeftArrow: () => void;
  isAnimationStart: boolean;
  setIsAnimationStart: (state: boolean) => void;
}
