export type IconPosition = 'left' | 'right' | null;

export interface IButton extends React.HTMLProps<HTMLButtonElement> {
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  iconPos?: IconPosition;
  filled?: boolean;
  outline?: boolean;
  disabled?: boolean;
  transparent?: boolean;
}
