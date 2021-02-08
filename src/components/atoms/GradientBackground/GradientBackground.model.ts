import { IAttributes } from 'types/interfaces';

export type GradientType = {
  angle?: string;
  colors: string[];
};

export interface IProps extends IAttributes<HTMLDivElement> {
  background: string;
  gradient?: GradientType;
}
