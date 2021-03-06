import { IAttributes } from 'types/interfaces';

export type IconPosition = 'left' | 'right' | null;

export interface IButton extends IAttributes<HTMLButtonElement> {
  icon?: string;
  iconPos?: IconPosition;
  filled?: boolean;
  outline?: boolean;
  disabled?: boolean;
  transparent?: boolean;
}
