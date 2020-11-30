export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  fullWidth?: boolean;
  label?: string;
  error?: string;
}
