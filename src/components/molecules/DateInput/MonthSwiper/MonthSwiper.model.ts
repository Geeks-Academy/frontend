export interface IMonthSwiper {
  monthNumber: number;
  isAnimationStart: boolean;
  animationClassName: string;
  isLeftButtonDisabled: boolean;
  isRightButtonDisabled: boolean;
  handleLeftArrow: () => void;
  handleRightArrow: () => void;
  setIsAnimationStart: (state: boolean) => void;
}
