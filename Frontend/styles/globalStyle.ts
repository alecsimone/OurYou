import { createGlobalStyle } from 'styled-components';
import {
  setAlpha,
  setLightness,
  setSaturation,
} from './functions/modifyColorFunctions';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html {
    background: ${setLightness(setSaturation(theme.blue, 90), 11)};
    color: ${theme.white};
    font-family: "proxima-nova", sans-serif;
    box-sizing: border-box;
    overflow-y: 'auto';
    scrollbar-width: 'thin';
    scrollbar-color: 'hsl(210, 10%, 30%) hsl(30, 1%, 4%)';
    font-size: 8px;
    ${theme.bigScreenBreakpoint} {
      font-size: 10px;
    }
    ${theme.massiveScreenBreakpoint} {
      font-size: 12px;
    }
    height: 100vh;
    --foundationBorderStyle: 3px solid ${setAlpha(theme.coolGrey, 0.25)};
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
