export interface IFormData {
  [key: string]: string | boolean;
}

export interface IMultiStepForm {
  title?: string;
  children?: JSX.Element[] | JSX.Element;
  onSubmit: (data: IFormData) => void;
  onNext: (data: IFormData) => void;
  onBack: (data: IFormData) => void;
  onCancel: () => void;
}
