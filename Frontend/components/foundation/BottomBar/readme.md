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
