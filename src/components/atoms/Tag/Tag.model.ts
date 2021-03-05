import { IAttributes } from 'types/interfaces';

export interface IProps extends IAttributes<HTMLDivElement> {
  bgColor?: string;
  fontColor?: string;
  getWidth?: any;
}
