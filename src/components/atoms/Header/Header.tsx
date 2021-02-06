import React from 'react';

import { Title } from './Header.styled';

export interface IProps extends React.HTMLProps<HTMLDivElement> {
  children: string;
}

const Header = ({ children, className }: IProps): JSX.Element => {
  return <Title className={className}>{children}</Title>;
};

export default Header;
