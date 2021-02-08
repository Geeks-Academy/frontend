import { IProps as Tag } from 'components/atoms/Tag/Tag.model';
import { IAttributes } from 'types/interfaces';

export interface IProps extends IAttributes<HTMLDivElement> {
  description: string;
  image: string;
  author: string;
  releaseDate: Date;
  price: number;
  score: number;
  level: 'Junior' | 'Mid' | 'Senior';
  tags: Tag[];
  recommendation?: boolean;
}
