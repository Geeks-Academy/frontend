import { IProps as Tag } from 'components/atoms/Tag/Tag.model';

export interface IProps {
  description: string;
  image: string;
  author: string;
  releaseDate: Date;
  price: number;
  score: number;
  level: 'Junior' | 'Mid' | 'Senior';
  tags: Tag[];
  recommendation: string;
  className?: string;
}