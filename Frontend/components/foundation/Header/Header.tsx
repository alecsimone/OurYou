import LogoBox from './LogoBox';
import MemberBox from './MemberBox';
import NavButtons from './NavButtons';
import SearchBar from './SearchBar';
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
      <div className="headerLeft">
        <NavButtons toggleNavSidebar={toggleNavSidebar} />
        <SearchBar
          showingSearch={showingSearch}
          toggleShowingSearch={toggleShowingSearch}
        />
      </div>
      <LogoBox toggleNavSidebar={toggleNavSidebar} />
      <MemberBox toggleThingsSidebar={toggleThingsSidebar} />
    </StyledHeader>
  );
};

export default Header;
