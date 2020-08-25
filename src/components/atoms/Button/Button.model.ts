type ButtonType = 'fill' | 'outline' | 'disabled' | 'transparent';

export enum EIconPosition {
  NONE,
  LEFT,
  RIGHT,
}

export interface IButton {
  children: string;
  icon?: string;
  iconPos?: EIconPosition;
  type?: ButtonType;
}
