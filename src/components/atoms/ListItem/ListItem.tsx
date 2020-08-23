import React from 'react';

import { Item, StyledLink } from './ListItem.styled';

interface ItemProps {
  id: number;
  txt: string;
  link?: null | { url: string; text: string };
}

const ListItem = ({ item, icon }: { item: ItemProps, icon: string }) => {
  return <Item>
    <img src={icon} alt="icon" />
    {item.txt}
    {item.link && (
      <StyledLink to={item.link.url}>
        {item.link.text}
      </StyledLink>
    )}
  </Item>
};

export default ListItem;
