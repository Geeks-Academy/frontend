export interface ISingleOption {
  id: number;
  value: string;
}

export interface ISelectInput {
  isMulti: boolean;
  options: ISingleOption[];
  handleOnClick: (callback: () => ISingleOption[]) => void | undefined;
}
