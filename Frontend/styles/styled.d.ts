import 'styled-components';

type ColorNames = 'white'|'lightBlack'|'midBlack'|'deepBlack'|'coolGrey'|'warmGrey'|'blue'|'green'|'gold'|'red';
export {ColorNames};

declare module 'styled-components' {
  export interface DefaultTheme {
    [key: string]: string;
    tinyText: string,
    miniText: string,
    smallText: string,
    bigText: string,
    smallHead: string,
    bigHead: string,

    white: string,

    lightBlack: string,
    midBlack: string,
    deepBlack: string,

    coolGrey: string,
    warmGrey: string,

    blue: string,
    green: string,
    gold: string,
    red: string,

    mobileBreakpoint: string,
    desktopBreakpoint: string,
    midScreenBreakpoint: string,
    bigScreenBreakpoint: string,
    massiveScreenBreakpoint: string,

    thingColors: {
      background: string,
      border: string,
      boxShadow: string,
    },
    scroll: {
      overflowY: string,
      scrollbarWidth: string,
      scrollbarColor: string,
    },

    spin: {
      animationName: string,
      animationDuration: string,
      animationIterationCount: string,
      animationTimingFunction: string,
    },
    spinBackward: {
      animationName: string,
      animationDuration: string,
      animationIterationCount: string,
      animationTimingFunction: string,
    },
    twist: {
      animationName: string,
      animationDuration: string,
      animationIterationCount: string,
      animationTimingFunction: string,
    },
  }
}