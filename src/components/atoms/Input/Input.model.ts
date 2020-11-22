export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label?: string;
  fullWidth?: boolean;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}
