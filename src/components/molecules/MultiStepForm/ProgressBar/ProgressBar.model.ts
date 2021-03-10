import { IFormData } from '../MultiStep.model';

export interface IProgressBar {
  steps: number[];
  activeStep: number;
  changeStep: (step: number) => void;
  formData: IFormData;
}
