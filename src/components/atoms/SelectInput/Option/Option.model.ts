import { ISingleOption } from '../SelectInput.model';

export interface IOption {
  isMulti: boolean;
  option: ISingleOption;
  selectedOptions: ISingleOption[];
  currentOptionId: number;
  updateSelectedOptions: (option: ISingleOption) => void;
}
