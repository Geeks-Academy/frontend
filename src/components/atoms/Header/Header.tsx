import React from 'react';

import { Title } from './Header.styled'

interface IProps {
  title: string;
}

const Header = ({ title }: IProps) => {
  return <Title>{title}</Title>;
}

export default Header;
