import {
  tinyText,
  miniText,
  smallText,
  bigText,
  smallHead,
  bigHead,
} from './fontSizes';
import {
  coolGrey,
  deepBlack,
  lightBlack,
  midBlack,
  white,
  warmGrey,
  blue,
  green,
  gold,
  red,
} from './colors';
import {
  mobileBreakpoint,
  desktopBreakpoint,
  midScreenBreakpoint,
  bigScreenBreakpoint,
  massiveScreenBreakpoint,
} from './breakpoints';
import { setAlpha, setSaturation } from './modifyColorFunctions';
import { DefaultTheme } from 'styled-components';

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

  thingColors: {
    background: `${setSaturation(lightBlack, 25)}`,
    border: `2px solid ${setAlpha(coolGrey, 0.15)}`,
    boxShadow: `0 4px 4px ${setAlpha(deepBlack, 0.2)}`,
  },
  scroll: {
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: 'hsl(210, 10%, 30%) hsl(30, 1%, 4%)',
  },

  spin: {
    animationName: 'spin',
    animationDuration: '1000ms',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
  spinBackward: {
    animationName: 'spinBackward',
    animationDuration: '1000ms',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
  twist: {
    animationName: 'twist',
    animationDuration: '1000ms',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
};

export default theme;
