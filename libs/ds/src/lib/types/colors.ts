import { darken } from 'polished';

export interface BrandColors {
  primary: string;
  secondary: string;
  accent: string;
  muted: string;
}

export interface UIColors {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  disabled: string;
  error: string;
  success: string;
}
export interface BGColors {
  primary: string;
  secondary: string;
}

export interface TextColors {
  primary: string;
  secondary: string;
  disabled: string;
  inverse: string;
  error: string;
  success: string;
}

export interface HighlightColors {
  primaryHighlight: string;
  primaryExtraHighlight: string;
  bgHighlight: string;
}

export interface ThemeColors {
  brand: BrandColors;
  ui: UIColors;
  bg: BGColors;
  text: TextColors;
  highlights: HighlightColors;
}

export const brandColors: BrandColors = {
  primary: '#012E86',
  secondary: '#0064D9',
  accent: '#DB7C00',
  muted: '#C6DAF7',
};

export const uiColors: UIColors = {
  primary: '#262626',
  secondary: '#757575',
  tertiary: '#F1F1F1',
  quaternary: '#FFFFFF',
  disabled: '#DEDEDE',
  error: '#D0421B',
  success: '#138000',
};

export const bgColors: BGColors = {
  primary: '#FFFFFF',
  secondary: '#F1F1F1',
};

export const textColors: TextColors = {
  primary: '#262626',
  secondary: '#757575',
  disabled: '#9C9C9C',
  inverse: '#FFFFFF',
  error: '#D0421B',
  success: '#138000',
};

export const highlightColors: HighlightColors = {
  primaryHighlight: darken(0.1, '#012E86'),
  primaryExtraHighlight: darken(0.2, '#012E86'),
  bgHighlight: darken(0.1, '#FFFFFF'),
};
