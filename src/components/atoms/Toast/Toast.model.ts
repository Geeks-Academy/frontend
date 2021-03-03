import { IAttributes } from 'types/interfaces';

export type ToastType = 'success' | 'error' | 'info';

export interface IProps extends IAttributes<HTMLDivElement> {
  type?: ToastType;
  header?: string;
  info?: string;
}

export enum DefaultToastHeaders {
  SUCCESS = 'Great success!',
  ERROR = 'Ops, something went wrong.',
  INFO = 'Check your input.',
}

export enum DefaultToastInfo {
  SUCCESS = 'Everything looks OK',
  ERROR = 'It looks that we have problem',
  INFO = 'Default info text - I have no idea for it',
}
