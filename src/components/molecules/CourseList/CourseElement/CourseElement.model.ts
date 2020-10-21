export interface IProps {
  description: string;
  image: string;
  author: string;
  releaseDate: Date;
  price: number;
  score: number;
  level: 'Junior' | 'Mid' | 'Senior';
  tags: string[];
  recommendation: string;
  className?: string;
}
