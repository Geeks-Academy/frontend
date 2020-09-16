export type ButtonType = 'success' | 'error' | 'info';

export interface IToast {
  type?: ButtonType;
  className?: string;
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
