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
  inputRef?: any;
  defaultValue?: string | number;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
