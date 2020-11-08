type InputType = 'text' | 'password' | 'email' | 'date' | 'number';

export interface IProps {
  placeholder: string;
  type?: InputType;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label?: string;
  className?: string;
  required?: boolean;
  register?: boolean;
  error?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
