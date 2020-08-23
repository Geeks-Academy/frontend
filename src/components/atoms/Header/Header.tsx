import React from 'react';

import PropTypes from 'prop-types';

import { Title } from './Header.styled';

interface IProps {
  title: string;
}

function Header({ title }: IProps) {
  return <Title>{title}</Title>;
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
