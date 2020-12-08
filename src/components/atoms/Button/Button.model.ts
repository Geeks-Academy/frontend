export type ButtonVariant = 'fill' | 'outline' | 'disabled' | 'transparent' | undefined;
export type IconPosition = 'left' | 'right' | null;

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  iconPos?: IconPosition;
  variant?: ButtonVariant;
}
