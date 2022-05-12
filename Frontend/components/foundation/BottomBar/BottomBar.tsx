import Link from 'next/link';
import FunctionalIcon from '../../icons/FunctionalIcon';
import HomeIcon from '../../icons/Home';
import Search from '../../icons/Search';
import X from '../../icons/X';
import BottomBarForm from './BottomBarForm';
import BottomBarFormButton from './BottomBarFormButton';
import StyledBottomBar from './StyledBottomBar';
import useBottomBar from './useBottomBar';

// interface BottomBarProps {}
const BottomBar = (): JSX.Element => {
  const { bottomBarState, bottomBarDispatch, submitForm } = useBottomBar();
  const { currentForm, input, showingForm } = bottomBarState;

  return (
    <StyledBottomBar>
      {showingForm && (
        <BottomBarForm
          placeholder={currentForm === 'search' ? 'Search' : 'Thing Title'}
          value={input}
          setValue={(value: string) => bottomBarDispatch({ newInput: value })}
          submitForm={submitForm}
        />
      )}
      <BottomBarFormButton
        name="search"
        icon={<Search color="white" />}
        dispatch={() => {
          bottomBarDispatch('search');
        }}
      />
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
      <BottomBarFormButton
        name="new"
        icon={<X color="white" />}
        dispatch={() => {
          bottomBarDispatch('new');
        }}
      />
    </StyledBottomBar>
  );
};

export default BottomBar;
