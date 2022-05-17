import { createGlobalStyle } from 'styled-components';
import {
  setAlpha,
  setLightness,
  setSaturation,
} from './functions/modifyColorFunctions';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html {
    --foundationBorderStyle: 3px solid ${setAlpha(theme.coolGrey, 0.25)};
    box-sizing: border-box;
    background: ${setLightness(setSaturation(theme.blue, 90), 11)};
    height: 100vh;
    overflow-y: 'auto';
    color: ${theme.white};
    font-family: "proxima-nova", sans-serif;
    scrollbar-width: 'thin';
    scrollbar-color: 'hsl(210, 10%, 30%) hsl(30, 1%, 4%)';
    font-size: 8px;
    ${theme.bigScreenBreakpoint} {
      font-size: 10px;
    }
    ${theme.massiveScreenBreakpoint} {
      font-size: 12px;
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;
    transition: background 0.5s ease-out;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    min-height: 100%;
    line-height: 1.6;
    font-size: ${theme.smallText};
    font-weight: 300;
  }
  #__next {
    height: 100%;
    min-height: 100%;
  }
  *::-webkit-scrollbar {
    background: ${theme.midBlack};
    width: .5rem;
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
    transition: background 0.2s ease-in;
    background: ${setLightness(theme.green, 10)} !important;
  }
  a, a:visited {
    text-decoration: none;
    word-break: break-word;
    word-wrap: break-word;
    color: ${setLightness(theme.blue, 75)};
    overflow-wrap: break-word;
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
      border: 2px solid ${setAlpha(theme.coolGrey, 0.5)};
      border-radius: 3px;
      background: ${theme.deepBlack};
    }
    .Toastify__toast-body {
      padding: 1rem 3rem;
      color: ${theme.white};
    }
    .Toastify__progress-bar {
      background: ${theme.blue};
    }
  }
`;
export default GlobalStyle;
