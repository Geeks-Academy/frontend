import { ISingleOption } from '../SelectInput.model';

export interface ISelect {
  handleOnClick: (callback: () => ISingleOption[]) => void | undefined;
  options: ISingleOption[];
  isMulti: boolean;
}
