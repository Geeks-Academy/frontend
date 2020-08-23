import React from 'react';

import ListItem from 'components/atoms/ListItem'
import { StyledList } from './List.styled';

interface ItemProps {
  id: number;
  txt: string;
  link?: null | { url: string; text: string };
}

interface ListProps {
  icon: string;
  items: ItemProps[];
}

const List = ({ icon, items }: ListProps) => {
  return (
    <StyledList>
      {items.map((item: ItemProps) => (
        <ListItem key={item.id} item={item} icon={icon} />
      ))}
    </StyledList>
  )
};

export default List;
