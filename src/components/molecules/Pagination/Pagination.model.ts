export type IData = any[] | any;

export interface IRequest {
  totalPassengers: number;
  totalPages: number;
  data: IData;
}

export interface IPagination {
  page: number;
  setPage: (v: number) => void;
  isLoading: boolean;
  resolvedData: IRequest;
  latestData: IRequest;
}

export type IVisibleButtons = Array<number>;
