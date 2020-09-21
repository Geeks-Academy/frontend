import { ISingleOption } from '../SelectInput.model';

export interface IOption {
  isMulti: boolean;
  option: ISingleOption;
  selectedOptions: ISingleOption[];
  currentOptionValue: string;
  updateSelectedOptions: (option: ISingleOption) => void;
}
