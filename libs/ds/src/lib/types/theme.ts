import { lighten, darken } from 'polished';

import { fonts, fontSizes, fontWeights, Fonts, FontWeights } from './font';
import {
  lineHeights,
  letterSpacings,
  LineHeights,
  LetterSpacings,
} from './line';
import {
  brandColors,
  uiColors,
  bgColors,
  textColors,
  highlightColors,
  ThemeColors,
} from './colors';

export const space: number[] = [0, 4, 8, 16, 32, 64, 128, 256, 512];
export const sizes: number[] = [8, 16, 32, 64, 128, 256, 512, 768, 1024, 1536];
export const breakpoints: string[] = ['40em', '56em', '64em'];

export interface Theme {
  space: number[];
  sizes: number[];
  fonts: Fonts;
  fontSizes: string[];
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  letterSpacings: LetterSpacings;
  breakpoints: string[];
  colors: ThemeColors;
}

export interface Themes {
  light: Theme;
  dark: Theme;
}

export const themes: Themes = {
  light: {
    space,
    sizes,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    breakpoints,
    colors: {
      brand: {
        primary: '#012E86',
        secondary: '#0064D9',
        accent: '#DB7C00',
        muted: '#C6DAF7',
      },
      ui: {
        primary: '#262626',
        secondary: '#757575',
        tertiary: '#F1F1F1',
        quaternary: '#FFFFFF',
        disabled: '#DEDEDE',
        error: '#D0421B',
        success: '#138000',
      },
      bg: {
        primary: '#FFFFFF',
        secondary: '#F1F1F1',
      },
      text: {
        primary: '#262626',
        secondary: '#757575',
        disabled: '#9C9C9C',
        inverse: '#FFFFFF',
        error: '#D0421B',
        success: '#138000',
      },
      highlights: {
        primaryHighlight: darken(0.1, '#012E86'),
        primaryExtraHighlight: darken(0.2, '#012E86'),
        bgHighlight: darken(0.1, '#FFFFFF'),
      },
    },
  },
  dark: {
    space,
    sizes,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    breakpoints,
    colors: {
      brand: {
        primary: '#298DFF',
        secondary: '#7CAEE8',
        accent: '#FDB447',
        muted: '#B7CBEA',
      },
      ui: {
        primary: '#FFFFFF',
        secondary: '#A1A1A1',
        tertiary: '#3C3C3C',
        quaternary: '#262626',
        disabled: '#242424',
        error: '#FF4D4D',
        success: '#1CBD00',
      },
      bg: {
        primary: '#111111',
        secondary: '#262626',
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#A1A1A1',
        disabled: '#525252',
        inverse: '#262626',
        error: '#FF4D4D',
        success: '#1CBD00',
      },
      highlights: {
        primaryHighlight: lighten(0.1, '#298DFF'),
        primaryExtraHighlight: lighten(0.2, '#298DFF'),
        bgHighlight: lighten(0.1, '#111111'),
      },
    },
  },
};
