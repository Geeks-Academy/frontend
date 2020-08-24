import React from 'react';

import { Title } from './Header.styled'

export interface IProps {
  title: string;
}

const Header = ({ title }: IProps) => {
  return <Title>{title}</Title>;
}

export default Header;
