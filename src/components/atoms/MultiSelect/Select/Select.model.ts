export interface ISingleOption {
  id: number;
  value: string;
}

export interface ISelect {
  handleOnClick: (callback: () => ISingleOption[]) => void | undefined;
  options: ISingleOption[];
  isMulti: boolean;
}
