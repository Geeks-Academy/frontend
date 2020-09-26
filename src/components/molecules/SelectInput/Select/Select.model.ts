import { ISingleOption } from '../SelectInput.model';

export interface ISelect {
  isMulti: boolean;
  selectCaption: string;
  inputPlaceholder: string;
  options: ISingleOption[];
  onClick: (callback: ISingleOption[]) => void;
  isOpen?: boolean;
}
