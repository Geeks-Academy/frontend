export interface IActionButtons {
  firstStep: number;
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
  numberOfSteps: number;
  lastStep: number;
}
