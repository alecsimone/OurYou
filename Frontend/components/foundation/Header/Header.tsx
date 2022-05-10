import { FC, useEffect, useState } from "react";
import { desktopBreakpointPx } from "../../../styles/breakpoints";
import LogoBox from "./LogoBox/LogoBox";
import MemberBox from "./MemberBox/MemberBox";
import NavButtons from "./NavButtons/NavButtons";
import StyledHeader from "./StyledHeader";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [showingSearch, setShowingSearch] = useState(false);

  useEffect(() => {
    // We always show the search bar if the screen is bigger than the desktop breakpoint. Otherwise, the user will have to show it manually
    if (window.innerWidth > desktopBreakpointPx) {
      setShowingSearch(true);
    }
    window.addEventListener("resize", () => {
      // TODO handle manual showing of the search bar
      // The problem with this implementation is that someone might have manually shown the search bar at a width below desktopBreakpointPx, then resized the window, which just hides it again. To account for that, we'd have to keep track of whether the user had manually shown the search bar (which I figure we could do by having the default state be null, and then toggling it would make it true/false), but we'd also have to keep the current value in a ref so we could pass it to the event callback, and that doesn't seem worth implementing right now for such an obscure edge case.
      if (window.innerWidth > desktopBreakpointPx) {
        setShowingSearch(true);
      } else {
        setShowingSearch(false);
      }
    });
  }, []);

  return (
    <StyledHeader
      className={`header ${showingSearch ? "showingSearch" : "hidingSearch"}`}
    >
      <NavButtons
        showingSearch={showingSearch}
        setShowingSearch={setShowingSearch}
      />
      <LogoBox />
      <MemberBox />
    </StyledHeader>
  );
};

export default Header;
