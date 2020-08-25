export type ButtonType = 'fill' | 'outline' | 'disabled' | 'transparent';

export enum EIconPosition {
  NONE,
  LEFT,
  RIGHT,
}

export interface IButton {
  children: string;
  icon?: any;
  iconPos?: EIconPosition;
  type?: ButtonType;
}
