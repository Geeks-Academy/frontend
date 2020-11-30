export interface IActionButtons {
  activeStep: number;
  onBack: () => void;
  onNext: () => void;
  onCancel: () => void;
  lastStep: number;
}
