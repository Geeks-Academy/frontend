import React from 'react';
import PropTypes from 'prop-types';
import listItemIcon from '../images/listItemIcon.svg';
import { List, ListItems, IconList, StyledLink } from './ListItem.styled';

const ListItem = ({ className }) => {
  const items = [
    {
      id: 1,
      txt: 'Build up your team or find your code buddie',
      type: 'text',
      icon: listItemIcon,
    },
    {
      id: 2,
      txt: 'Improve your skills and work on amazing IT projects',
      type: 'text',
      icon: listItemIcon,
    },
    {
      id: 3,
      txt: 'Find support you need and help other people ',
      type: 'link',
      icon: listItemIcon,
    },
  ];

  const renderedList = items.map(({ id, txt, type, icon }) => (
    <ListItems key={id}>
      <IconList src={icon} alt="icon" />
      {txt}
      {type === 'link' && (
        <StyledLink className={className} to="/">
          and more!
        </StyledLink>
      )}
    </ListItems>
  ));

  return <List>{renderedList}</List>;
};

ListItem.propTypes = {
  className: PropTypes.shape({}),
};

ListItem.defaultProps = {
  className: {},
};

export default ListItem;
