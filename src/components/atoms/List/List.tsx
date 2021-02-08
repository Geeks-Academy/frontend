import React from 'react';

import ListItem from 'components/atoms/ListItem';
import { StyledList } from './List.styled';
import { IListElement } from './List.model';

export interface IProps
  extends React.HTMLAttributes<HTMLUListElement>,
    React.RefAttributes<HTMLUListElement> {
  icon?: string;
  items?: IListElement[];
}

const List = ({ icon, items, ...props }: IProps): JSX.Element => {
  return (
    <StyledList data-testid="list" {...props}>
      {items?.map((item: IListElement) => (
        <ListItem key={item.id} item={item} icon={icon} />
      ))}
    </StyledList>
  );
};

export default List;
