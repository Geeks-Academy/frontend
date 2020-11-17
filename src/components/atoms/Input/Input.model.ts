import { UseFormMethods } from 'react-hook-form';

type InputType = 'text' | 'password' | 'email' | 'date' | 'number';

export interface IProps extends Partial<Pick<UseFormMethods, 'register' | 'errors'>> {
  type?: InputType;
  placeholder: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label?: string;
  className?: string;
  name?: string;
  ref?: HTMLInputElement | any;
  fullWidth?: boolean;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}
