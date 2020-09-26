import { ISingleOption } from '../SelectInput.model';

export interface ISelect {
  isMulti: boolean;
  selectCaption: string;
  inputPlaceholder: string;
  options: ISingleOption[];
  onChange: (selection: ISingleOption[]) => void;
  isOpen?: boolean;
}
