import { cloneDeep } from 'lodash';
import { useReducer } from 'react';

type bottomBarActions = 'search' | 'new' | 'clear' | { newInput: string };

interface bottomBarStateInterface {
  showingForm: boolean;
  currentForm: 'search' | 'new' | null;
  input: string;
}

const useBottomBar = () => {
  const initialBottomBarState: bottomBarStateInterface = {
    showingForm: false,
    currentForm: null,
    input: '',
  };

  const formToggler = (
    state: bottomBarStateInterface,
    action: bottomBarActions
  ): bottomBarStateInterface => {
    let newState = cloneDeep(state);

    if (action === 'search' || action === 'new') {
      if (state.currentForm === action) {
        // If we're already on the requested form, we want to toggle showing the form
        newState.showingForm = !state.showingForm;
      } else {
        // If we weren't, we want to clear the input and show the requested form
        newState.showingForm = true;
        newState.currentForm = action;
        newState.input = '';
      }
    } else if (action === 'clear') {
      newState = initialBottomBarState;
    } else if (typeof action === 'object') {
      newState.input = action.newInput;
    }
    return newState;
  };

  const [bottomBarState, bottomBarDispatch] = useReducer(
    formToggler,
    initialBottomBarState
  );

  const search = (searchTerm: string) => {
    // todo: Redirect to the search page with the searchTerm as the query param
    // eslint-disable-next-line no-console
    console.log(`Searching for: ${searchTerm}`);
    bottomBarDispatch('clear');
  };

  const newThingWithTitle = (title: string) => {
    // todo: Call a mutation to create a new thing with the provided title
    // eslint-disable-next-line no-console
    console.log(`Creating post: ${title}`);
    bottomBarDispatch('clear');
  };

  const submitForm = () => {
    if (bottomBarState.currentForm === 'search') {
      search(bottomBarState.input);
    } else if (bottomBarState.currentForm === 'new') {
      newThingWithTitle(bottomBarState.input);
    }
  };

  return {
    bottomBarState,
    bottomBarDispatch,
    submitForm,
  };
};

export default useBottomBar;
