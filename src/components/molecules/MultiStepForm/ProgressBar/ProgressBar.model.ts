export interface IProgressBar {
  steps: number[];
  activeStep: number;
  changeStep: (step: number) => void;
}
