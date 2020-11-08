export interface IStep {
  numberOfSteps: number;
  currentStep: number;
  changeStep: (step: number) => void;
}
