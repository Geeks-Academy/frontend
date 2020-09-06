import React from 'react';

import { Title } from './Header.styled';

export interface IProps {
  title: string;
  className?: string;
}

const Header = ({ title, className }: IProps): JSX.Element => {
  return <Title className={className}>{title}</Title>;
};

export default Header;
