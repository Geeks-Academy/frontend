export interface IMultiSelect {
  isMulti?: boolean;
  handleOnClick: (callback: () => any[]) => void | undefined;
}
