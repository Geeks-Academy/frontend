export type IconPosition = 'left' | 'right' | null;

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  iconPos?: IconPosition;
  fill?: boolean;
  outline?: boolean;
  disabled?: boolean;
  transparent?: boolean;
}
