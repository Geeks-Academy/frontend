export interface ISingleOption {
  id: string;
  value: string;
}

export interface ISelectInput {
  isMulti?: boolean;
  selectCaption: string;
  inputPlaceholder: string;
  options: ISingleOption[];
  onClick: (callback: () => ISingleOption[]) => void;
  isOpen?: boolean;
}
