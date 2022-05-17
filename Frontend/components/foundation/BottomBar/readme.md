# [The Bottom Bar](BottomBar.tsx)

**On mobile, we render a bar at the bottom of the app that contains three buttons: a search button, a link to the homepage, and a new thing button. The search and new thing buttons pop up a text input that allows you to either search the site or create a new thing with the given title.**

## [useBottomBar](useBottomBar.ts)

returns a bottomBarState object, a bottomBarDispatch function, and a submitForm function.

```typescript
interface bottomBarStateInterface {
  showingForm: boolean;
  currentForm: 'search' | 'new' | null;
  input: string;
}
```

```typescript
type bottomBarActions = 'search' | 'new' | 'clear' | { newInput: string };
```

## Sub-Components

- **[BottomBarForm](BottomBarForm.tsx)**: An input for either searching things or creating a new one with a given title
- **[BottomBarFormButton](BottomBarFormButton.tsx)**: Wraps the two icons that interact with the form

## [Features](BottomBar.test.tsx)

### It shows search and new thing forms, and moves seamlessly between them

- Clicking either the search or new thing button should pop up the form
- Clicking the other button should change the form to that input and clear the text
- Clicking the button of the currently active input should close the input without clearing the text

### It calls the search and new thing functions

- Pressing enter inside the input should perform the relevant action, either searching or creating a new thing
- Searching navigates to the search result page with the input string as a query parameter
- Creating a new thing fires a mutation that creates a new thing with the input string as its title

### It routes to the home page after clicking the Home button

- Clicking the home button should route to the home page.
