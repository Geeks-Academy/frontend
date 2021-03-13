import { IAttributes } from 'types/interfaces';

import { Title } from './Header.styled';

const Header = ({ children, ...props }: IAttributes<HTMLDivElement>): JSX.Element => {
  return <Title {...props}>{children}</Title>;
};

export default Header;
