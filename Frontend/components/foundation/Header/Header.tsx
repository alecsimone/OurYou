import LogoBox from './LogoBox/LogoBox';
import MemberBox from './MemberBox/MemberBox';
import NavButtons from './NavButtons/NavButtons';
import StyledHeader from './StyledHeader';
import useToggleableSearch from './useToggleableSearch';

interface HeaderProps {
  toggleNavSidebar: () => void;
  toggleThingsSidebar: () => void;
}

const Header = ({
  toggleNavSidebar,
  toggleThingsSidebar,
}: HeaderProps): JSX.Element => {
  const [showingSearch, toggleShowingSearch] = useToggleableSearch();

  return (
    <StyledHeader
      className={`header ${showingSearch ? 'showingSearch' : 'hidingSearch'}`}
    >
      <NavButtons
        showingSearch={showingSearch}
        toggleShowingSearch={toggleShowingSearch}
        toggleNavSidebar={toggleNavSidebar}
      />
      <LogoBox toggleNavSidebar={toggleNavSidebar} />
      <MemberBox toggleThingsSidebar={toggleThingsSidebar} />
    </StyledHeader>
  );
};

export default Header;
