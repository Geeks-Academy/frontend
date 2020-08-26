export type ButtonType = 'fill' | 'outline' | 'disabled' | 'transparent';
export type IconPosition = 'left' | 'right' | 'none';

export interface IButton {
  children: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  iconPos?: IconPosition;
  type?: ButtonType;
}
