export type ButtonType = 'fill' | 'outline' | 'disabled' | 'transparent';
export type IconPosition = 'left' | 'right' | 'none';

export interface IButton {
  children: string;
  icon?: any;
  iconPos?: IconPosition;
  type?: ButtonType;
}
