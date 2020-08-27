export interface Fonts {
  body: string;
  heading: string;
  monospace: string;
}

export interface FontWeights {
  regular: number;
  medium: number;
  bold: number;
}

export const fonts: Fonts = {
  body: '"Helvetica Neue", Roboto, sans-serif',
  heading: '"Roboto", sans-serif',
  monospace: 'Menlo, monospace',
};

export const fontSizes: string[] = [
  '0.625rem',
  '0.75rem',
  '1rem',
  '1.125rem',
  '1.25rem',
  '1.5rem',
  '1.75rem',
  '2rem',
  '2.5rem',
  '3rem',
];

export const fontWeights: FontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};
