import React from 'react';

import ListItem from 'components/atoms/ListItem';
import { StyledList } from './List.styled';
import { IListElement } from './List.model';

export interface IProps extends React.HTMLProps<HTMLUListElement> {
  icon: string;
  items: IListElement[];
}

const List = ({ icon, items }: IProps): JSX.Element => {
  return (
    <StyledList data-testid="list">
      {items.map((item: IListElement) => (
        <ListItem key={item.id} item={item} icon={icon} />
      ))}
    </StyledList>
  );
};

export default List;
