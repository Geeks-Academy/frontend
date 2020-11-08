export type ButtonVariant = 'fill' | 'outline' | 'disabled' | 'transparent' | undefined;
export type ButtonType = 'button' | 'reset' | 'submit' | undefined;
export type IconPosition = 'left' | 'right' | null;

export interface IButton {
  children: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  iconPos?: IconPosition;
  type?: ButtonType;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
