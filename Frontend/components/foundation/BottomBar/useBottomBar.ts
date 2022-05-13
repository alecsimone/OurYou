import { useReducer } from 'react';

type bottomBarActions = 'search' | 'new' | 'clear' | { newInput: string };
export type { bottomBarActions };

interface bottomBarStateInterface {
  showingForm: boolean;
  currentForm: 'search' | 'new' | null;
  input: string;
}

const useBottomBar = () => {
  const initialBottomBarState = {
    showingForm: false,
    currentForm: null,
    input: '',
  };

  const formToggler = (
    state: bottomBarStateInterface,
    action: bottomBarActions
  ): bottomBarStateInterface => {
    let newState = JSON.parse(JSON.stringify(state));

    if (action === 'search') {
      if (state.currentForm === 'search') {
        // If we're already on the search form, we want to toggle showing the form
        newState.showingForm = !state.showingForm;
      } else {
        // If we weren't, we want to clear the input and show the search form
        newState.showingForm = true;
        newState.currentForm = 'search';
        newState.input = '';
      }
    } else if (action === 'new') {
      if (state.currentForm === 'new') {
        // If we're already on the search form, we want to toggle showing the form
        newState.showingForm = !state.showingForm;
      } else {
        // If we weren't, we want to clear the input and show the search form
        newState.showingForm = true;
        newState.currentForm = 'new';
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
    console.log(`Searching for: ${searchTerm}`);
    bottomBarDispatch('clear');
  };

  const newThingWithTitle = (title: string) => {
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
