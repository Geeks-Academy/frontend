import React from 'react';

import { Item, StyledLink } from './ListItem.styled';
import { ILink, IListItem } from './ListItem.model'

interface IProps {
  item: IListItem;
  icon: string;
}

const ListItem = ({ item, icon }: IProps) => {
  return (
    <Item>
      <img src={icon} alt="icon" />
      {item.txt}
      {item.link && (
        <StyledLink to={item.link.url}>
          {item.link.text}
        </StyledLink>
      )}
    </Item>
  )
};

export default ListItem;
