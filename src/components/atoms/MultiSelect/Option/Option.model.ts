export interface ISingleOption {
  id: number;
  value: string;
}

export interface IOption {
  isMulti: boolean;
  option: ISingleOption;
  selectedOptions: ISingleOption[];
  currentOptionValue: string;
  updateSelectedOptions: (option: ISingleOption) => void;
}
