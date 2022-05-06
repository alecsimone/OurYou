import { FC } from 'react';
import LogoBox from './LogoBox/LogoBox';
import MemberBox from './MemberBox/MemberBox';
import NavButtons from './NavButtons/NavButtons';
import StyledHeader from './StyledHeader';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  console.log('Header');
  return (
    <StyledHeader>
      <NavButtons />
      <LogoBox />
      <MemberBox />
    </StyledHeader>
  );
};

export default Header;
