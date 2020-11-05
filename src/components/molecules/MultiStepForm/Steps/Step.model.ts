export interface IStep {
  numberOfSteps: number;
  currentStep: number;
  prevStep: (step: number) => void;
}
