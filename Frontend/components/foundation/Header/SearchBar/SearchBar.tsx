import Input from '../../../../styles/extendableElements/Input';
import FunctionalIcon from '../../../icons/FunctionalIcon';
import Search from '../../../icons/Search';
import StyledSearchBar from './StyledSearchBar';

interface SearchBarProps {
  showingSearch: boolean;
  toggleShowingSearch: () => void;
}

const SearchBar = ({
  showingSearch,
  toggleShowingSearch,
}: SearchBarProps): JSX.Element => {
  return (
    <StyledSearchBar>
      <FunctionalIcon
        iconName="search"
        onClick={() => toggleShowingSearch()}
      >
        <Search />
      </FunctionalIcon>
      {showingSearch && (
        <Input
          className="search"
          type="text"
          placeholder="Search"
        />
      )}
    </StyledSearchBar>
  );
};

export default SearchBar;
