import React from 'react';

import ListItem from 'components/atoms/ListItem';
import { StyledList } from './List.styled';
import { IListElement } from './List.model';

export interface IProps {
  icon: string;
  items: IListElement[];
  className?: string;
}

const List = ({ icon, items, className }: IProps): JSX.Element => {
  return (
    <StyledList className={className}>
      {items.map((item: IListElement) => (
        <ListItem key={item.id} item={item} icon={icon} />
      ))}
    </StyledList>
  );
};

export default List;
