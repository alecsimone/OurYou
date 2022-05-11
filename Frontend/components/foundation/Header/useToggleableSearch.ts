import { useEffect, useState } from 'react';
import {
  desktopBreakpointPx,
  mobileBreakpointPx,
} from '../../../styles/breakpoints';

const useToggleableSearch = (): [boolean, () => void] => {
  const [showingSearch, setShowingSearch] = useState(false);

  useEffect(() => {
    // We always show the search bar if the screen is bigger than the desktop breakpoint. Otherwise, the user will have to show it manually
    if (window.innerWidth > desktopBreakpointPx) {
      setShowingSearch(true);
    }
    window.addEventListener('resize', () => {
      // TODO handle manual showing of the search bar
      // The problem with this implementation is that someone might have manually shown the search bar at a width below desktopBreakpointPx, then resized the window, which just hides it again. To account for that, we'd have to keep track of whether the user had manually shown the search bar (which I figure we could do by having the default state be null, and then toggling it would make it true/false), but we'd also have to keep the current value in a ref so we could pass it to the event callback, and that doesn't seem worth implementing right now for such an obscure edge case.
      if (window.innerWidth > desktopBreakpointPx) {
        setShowingSearch(true);
      } else {
        setShowingSearch(false);
      }
    });
  }, []);

  const toggleShowingSearch = () => {
    // We only want to toggle showingSearch if the screen is between the mobileBreakpoint and the desktopBreakpoint. If it's smaller, we never want to show the search bar, and if it's larger, we always want to show it.
    if (window.innerWidth < mobileBreakpointPx) {
      setShowingSearch(false);
    } else if (window.innerWidth > desktopBreakpointPx) {
      setShowingSearch(true);
    } else {
      setShowingSearch(!showingSearch);
    }
  };

  return [showingSearch, toggleShowingSearch];
};

export default useToggleableSearch;
