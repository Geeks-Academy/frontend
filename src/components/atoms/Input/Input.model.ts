type InputType = 'text' | 'password' | 'email' | 'date' | 'number';

export interface IProps {
  type?: InputType;
  placeholder?: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label?: string;
  min?: string | number;
  max?: string | number;
  value?: string | number;
  pattern?: string;
  className?: string;
  ref?: HTMLInputElement;
  defaultValue?: string | number;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
