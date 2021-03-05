import { IProps as Tag } from 'components/atoms/Tag/Tag.model';
import { IAttributes } from 'types/interfaces';

export interface IProps extends IAttributes<HTMLDivElement> {
  tags: Tag[];
}
