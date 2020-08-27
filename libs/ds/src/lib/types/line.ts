export interface LineHeights {
  solid: number;
  title: number;
  copy: number;
}

export interface LetterSpacings {
  default: string;
  tracked: string;
}

export const lineHeights: LineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5,
};

export const letterSpacings: LetterSpacings = {
  default: 'normal',
  tracked: '0.04em',
};
