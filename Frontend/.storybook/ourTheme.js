import { create } from '@storybook/theming';
import {
  blue,
  coolGrey,
  deepBlack,
  gold,
  green,
  lightBlack,
  midBlack,
  white,
} from '../styles/colors';
import { setLightness } from '../styles/functions/modifyColorFunctions';

export default create({
  base: 'dark',
  brandTitle: 'Our Story',
  brandImage: 'https://ouryou.org/favicon.ico',

  colorPrimary: gold,
  colorSecondary: blue,

  appBg: midBlack,
  appContentBg: lightBlack,
  appBorderColor: coolGrey,
  barSelectedColor: blue,
  barTextColor: setLightness(white, 50),

  barBg: lightBlack,

  textColor: white,
  textMutedColor: setLightness(white, 50),
});
