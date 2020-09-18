export interface IOption {
  text: string;
  isMulti: boolean;
  value: string | number;
  selectedOptions: (string | number)[];
  currentOptionValue: string | number;
  updateSelectedOptions: (value: string | number, e: any) => void;
}
