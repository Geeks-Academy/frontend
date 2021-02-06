import { IProps as Tag } from 'components/atoms/Tag/Tag.model';

export interface IProps extends React.HTMLProps<HTMLDivElement> {
  tags: Tag[];
}
