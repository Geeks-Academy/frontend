type InputType = 'text' | 'password' | 'email' | 'date' | 'number';

export interface IProps {
  type?: InputType;
  placeholder: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label?: string;
  className?: string;
  id?: string;
  ref?: HTMLInputElement;
  onChangeFunc?: any; // do poprawienia typ
  debounce?: number;
}
