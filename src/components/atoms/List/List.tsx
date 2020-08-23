import React from 'react';

import ListItem from 'components/atoms/ListItem'
import { StyledList } from './List.styled';
import { ILink, IListElement } from './List.model'

interface IProps {
  icon: string;
  items: IListElement[];
}

const List = ({ icon, items }: IProps) => {
  return (
    <StyledList>
      {items.map((item: IListElement) => (
        <ListItem key={item.id} item={item} icon={icon} />
      ))}
    </StyledList>
  )
};

export default List;
