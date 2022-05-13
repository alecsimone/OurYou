import Link from 'next/link';
import Input from '../../../styles/extendableElements/Input';
import FunctionalIcon from '../../icons/FunctionalIcon';
import HomeIcon from '../../icons/Home';
import Search from '../../icons/Search';
import X from '../../icons/X';
import StyledBottomBar from './StyledBottomBar';
import useBottomBar from './useBottomBar';

// interface BottomBarProps {}
const BottomBar = (): JSX.Element => {
  const { bottomBarState, bottomBarDispatch, search, newThingWithTitle } =
    useBottomBar();

  return (
    <StyledBottomBar>
      {bottomBarState.showingForm && (
        <form
          className="bottomBarInputWrapper"
          onSubmit={(e) => {
            e.preventDefault();
            if (bottomBarState.currentForm === 'search') {
              search(bottomBarState.input);
            } else if (bottomBarState.currentForm === 'new') {
              newThingWithTitle(bottomBarState.input);
            }
          }}
        >
          <Input
            className="bottomBarInput"
            placeholder={
              bottomBarState.currentForm === 'search' ? 'Search' : 'Thing Title'
            }
            value={bottomBarState.input}
            onChange={(e) => bottomBarDispatch({ newInput: e.target.value })}
          />
        </form>
      )}
      <div
        className="bottomBarButtonWrapper search"
        role="button"
        tabIndex={0}
        onClick={() => bottomBarDispatch('search')}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            bottomBarDispatch('search');
          }
        }}
      >
        <FunctionalIcon iconName="search">
          <Search color="white" />
        </FunctionalIcon>
      </div>
      <Link href="/">
        <a
          href="/"
          className="bottomBarButtonWrapper"
        >
          <FunctionalIcon iconName="home">
            <HomeIcon color="white" />
          </FunctionalIcon>
        </a>
      </Link>
      <div
        className="bottomBarButtonWrapper new"
        role="button"
        tabIndex={0}
        onClick={() => bottomBarDispatch('new')}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            bottomBarDispatch('new');
          }
        }}
      >
        <FunctionalIcon iconName="new">
          <X color="white" />
        </FunctionalIcon>
      </div>
    </StyledBottomBar>
  );
};

export default BottomBar;
