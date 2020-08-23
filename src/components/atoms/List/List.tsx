import React from 'react';

import ListItem from 'components/atoms/ListItem'
import { StyledList } from './List.styled';
import { ILink, IListElement } from './List.model'

interface IListProps {
  icon: string;
  items: IListElement[];
}

const List = ({ icon, items }: IListProps) => {
  return (
    <StyledList>
      {items.map((item: IListElement) => (
        <ListItem key={item.id} item={item} icon={icon} />
      ))}
    </StyledList>
  )
};

export default List;
