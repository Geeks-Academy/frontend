import React from 'react';

import { Item, StyledLink } from './ListItem.styled';
import { IListItem } from './ListItem.model';

export interface IProps {
  item: IListItem;
  icon: string;
}

const ListItem = ({ item, icon }: IProps): JSX.Element => {
  return (
    <Item>
      <img src={icon} alt="icon" />
      <p>
        {item.txt}
        {item.link && <StyledLink to={item.link.url}> {item.link.text}</StyledLink>}
      </p>
    </Item>
  );
};

export default ListItem;
