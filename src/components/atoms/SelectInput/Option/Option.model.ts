import { ISingleOption } from '../SelectInput.model';

export interface IOption {
  isMulti: boolean;
  option: ISingleOption;
  selectedOptions: ISingleOption[];
  currentOptionId: string;
  updateSelectedOptions: (option: ISingleOption) => void;
}
