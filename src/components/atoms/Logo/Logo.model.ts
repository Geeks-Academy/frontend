import { IAttributes } from 'types/interfaces';

export interface IProps extends IAttributes<HTMLDivElement> {
  logoOnly?: boolean;
  textPlacement?: 'vertical' | 'horizontal';
}
