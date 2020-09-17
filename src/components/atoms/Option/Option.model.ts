export interface IOption {
  text: string;
  value: string | number;
  updateSelectedOptions: (value: string | number) => void;
  selectedOptions: (string | number)[];
}
