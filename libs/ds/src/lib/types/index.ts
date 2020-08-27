import { InjectionToken } from '@angular/core';
import { Themes } from './theme';

export interface ThemeOptions {
  themes: Themes;
}

export const THEME_OPTIONS = new InjectionToken<ThemeOptions>('ThemeOptions');
