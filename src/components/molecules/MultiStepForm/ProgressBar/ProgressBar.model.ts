export interface IProgressBar {
  steps: number[];
  activeStep: number;
  setActiveStep: (active: number) => void;
}
