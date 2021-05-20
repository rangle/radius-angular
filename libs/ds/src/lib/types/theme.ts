import { lighten } from 'polished';

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
      brand: brandColors,
      ui: uiColors,
      bg: bgColors,
      text: textColors,
      highlights: highlightColors,
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

export type ThemeProperties = { [area in keyof Theme]?: [string, string?] };

export const themeProperties: ThemeProperties = {
  breakpoints: ['bp'],
  colors: ['color'],
  fonts: ['ff'],
  fontSizes: ['fs'],
  lineHeights: ['lh'],
  letterSpacings: ['ls'],
  sizes: ['sz', 'px']
};

