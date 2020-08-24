export enum EIconPosition {
  NONE,
  LEFT,
  RIGHT,
}

export interface IButton {
  children: string;
  icon?: string;
  iconPos?: EIconPosition;
  type?: 'fill' | 'outline' | 'disabled' | 'none';
}
