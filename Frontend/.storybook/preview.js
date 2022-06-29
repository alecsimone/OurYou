import { MockedProvider } from '@apollo/client/testing';
import { ThemeProvider } from 'styled-components';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import GlobalStyle from '@styles/globalStyle';
import theme from '../styles/theme';
import ourTheme from './ourTheme';
import { deepBlack, lightBlack, midBlack } from '../styles/colors';
import {
  bigScreenBreakpointPx,
  desktopBreakpointPx,
  massiveScreenBreakpointPx,
  midScreenBreakpointPx,
  mobileBreakpointPx,
} from '../styles/breakpoints';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'midBlack',
    values: [
      {
        name: 'lightBlack',
        value: lightBlack,
      },
      {
        name: 'midBlack',
        value: midBlack,
      },
      {
        name: 'deepBlack',
        value: deepBlack,
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: ourTheme,
  },
  layout: 'centered',
  viewport: {
    viewports: {
      mobile: {
        name: 'BelowMobile',
        styles: {
          width: `${mobileBreakpointPx - 1}px`,
          height: '800px',
        },
        type: 'mobile',
      },
      desktop: {
        name: 'Below Desktop',
        styles: {
          width: `${desktopBreakpointPx - 1}px`,
          height: '1100px',
        },
        type: 'tablet',
      },
      midScreen: {
        name: 'Below midScreen',
        styles: {
          width: `${midScreenBreakpointPx - 1}px`,
          height: '1200px',
        },
        type: 'desktop',
      },
      bigScreen: {
        name: 'Below bigScreen',
        styles: {
          width: `${bigScreenBreakpointPx - 1}px`,
          height: '1280px',
        },
        type: 'desktop',
      },
      massiveScreen: {
        name: 'Below massiveScreen',
        styles: {
          width: `${massiveScreenBreakpointPx - 1}px`,
          height: '1400px',
        },
        type: 'desktop',
      },
      hugeScreen: {
        name: 'Above massiveScreen',
        styles: {
          width: `${massiveScreenBreakpointPx + 1}px`,
          height: '1440px',
        },
        type: 'desktop',
      },
    },
  },
  apolloClient: {
    MockedProvider,
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{ padding: '2rem', background: `${midBlack}` }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];
