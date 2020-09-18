export interface ISelect {
  handleOnClick: (callback: () => any[]) => void | undefined;
  isMulti: boolean;
}
