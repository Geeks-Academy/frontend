import React from 'react';
import icon from '../images/Vector.svg';
import { List, ListItems, IconList, StyledLink } from './ListItem.styled';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListItem = ({ className }) => {
  console.log(className);
  const items = [
    {
      id: 1,
      txt: 'Build up your team or find your code buddie',
    },
    {
      id: 2,
      txt: 'Improve your skills and work on amazing IT projects',
    },
    {
      id: 3,
      txt: 'Find support you need and help other people ',
    },
  ];

  const renderedList = items.map(({ id, txt }) => (
    <ListItems key={id}>
      <IconList src={icon} alt="icon" />
      {txt}{' '}
      {id === 3 && (
        <StyledLink className={className} to="/">
          and more!
        </StyledLink>
      )}
    </ListItems>
  ));

  return (
    <BrowserRouter>
      <List>{renderedList}</List>
    </BrowserRouter>
  );
};

ListItem.propTypes = {
  className: PropTypes.object,
};

export default ListItem;
