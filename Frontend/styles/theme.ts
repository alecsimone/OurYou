import { css, DefaultTheme } from 'styled-components';
import {
  bigScreenBreakpoint,
  desktopBreakpoint,
  massiveScreenBreakpoint,
  midScreenBreakpoint,
  mobileBreakpoint,
} from './breakpoints';
import {
  blue,
  coolGrey,
  deepBlack,
  gold,
  green,
  lightBlack,
  midBlack,
  red,
  warmGrey,
  white,
} from './colors';
import {
  bigHead,
  bigText,
  miniText,
  smallHead,
  smallText,
  tinyText,
} from './fontSizes';
import { setAlpha, setSaturation } from './functions/modifyColorFunctions';

const scroll = css`
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: hsl(210, 10%, 30%) hsl(30, 1%, 4%);
`;

const thingColors = css`
  background: ${setSaturation(lightBlack, 25)};
  border: 2px solid ${setAlpha(coolGrey, 0.15)};
  box-shadow: 0 4px 4px ${setAlpha(deepBlack, 0.2)};
`;

const spin = css`
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const spinBackward = css`
  animation-name: spinBackward;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const twist = css`
  animation-name: twist;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export { scroll, thingColors, spin, spinBackward, twist };

const theme: DefaultTheme = {
  tinyText,
  miniText,
  smallText,
  bigText,
  smallHead,
  bigHead,

  white,

  lightBlack,
  midBlack,
  deepBlack,

  coolGrey,
  warmGrey,

  blue,
  green,
  gold,
  red,

  mobileBreakpoint,
  desktopBreakpoint,
  midScreenBreakpoint,
  bigScreenBreakpoint,
  massiveScreenBreakpoint,
};

export default theme;
