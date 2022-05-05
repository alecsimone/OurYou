import { createGlobalStyle } from 'styled-components';
import { setAlpha, setLightness, setSaturation } from './modifyColorFunctions';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html {
    background: ${setLightness(setSaturation(theme.blue, 90), 11)};
    color: ${theme.white};
    font-family: "proxima-nova", sans-serif;
    box-sizing: border-box;
    ${(props) => props.theme.scroll};
    font-size: 8px;
    ${theme.bigScreenBreakpoint} {
      font-size: 10px;
    }
    ${theme.massiveScreenBreakpoint} {
      font-size: 12px;
    }
    height: 100vh;
    --header-height: calc(6.6rem + 3px); // On mobile, the header has a .5rem padding on both top and bottom and a 3px border. It gets its height from the MemberBox, which has a height of 2.25rem * 1.6 (2.25rem font size at 1.6 line height), and a 1rem margin on either side. So that's 2.25 * 1.6 + 1 * 2 + 0.5 * 2 = 6.6 rem, + 3px for the border
    ${theme.mobileBreakpoint} {
      --header-height: calc(7rem + 3px); // On bigger screens, the header's padding and border are still 0.5rem * 2 and 3px respectively, but it gets its height from the search box, which has a height of 4 rem and a margin of 1rem on either side. Thus the contents are 6rem, the margin is 1 rem, and the border is 3px for a total of 7rem + 3px;
    }
    --bottombar-height: calc(6.25rem + 6px); // The bottom bar has 1.75rem of padding on the top and bottom around icons that have a height of 2.75rem, and a 2px border on top. Even though the line height is 1 everywhere, the svgs within the bottom bar are getting an extra 4px added onto them, so we added that too.
  }
  *, *:before, *:after {
    box-sizing: inherit;
    transition: background 0.5s ease-out;
  }
  body {
    min-height: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-size: ${theme.smallText};
    line-height: 1.6;
    font-weight: 300;
  }
  #__next {
    min-height: 100%;
    height: 100%;
  }
  *::-webkit-scrollbar {
    width: .5rem;
    background: ${theme.midBlack};
  }
  *::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px ${theme.deepBlack};
  }
  *::-webkit-scrollbar-thumb {
    border-radius: 3px;
    box-shadow: inset 0 0 1px ${theme.deepBlack};
    background: ${theme.coolGrey};
  }
  &.success {
    background: ${setLightness(theme.green, 10)} !important;
    transition: background 0.2s ease-in;
  }
  a, a:visited {
    text-decoration: none;
    color: ${setLightness(theme.blue, 75)};
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    &:hover {
      text-decoration: underline;
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes spinBackward {
    from {
      transform: rotate(330deg);
    }
    to {
      transform: rotate(-30deg);
    }
  }
  @keyframes twist {
    from {
      transform: rotateY(360deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }
  .Toastify__toast-container.dailiesStyle {
    width: auto;
    max-width: 42rem;
    .Toastify__toast {
      background: ${theme.deepBlack};
      border: 2px solid ${setAlpha(theme.coolGrey, 0.5)};
      border-radius: 3px;
    }
    .Toastify__toast-body {
      color: ${theme.white};
      padding: 1rem 3rem;
    }
    .Toastify__progress-bar {
      background: ${theme.blue};
    }
  }
`;
export default GlobalStyle;
