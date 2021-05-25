import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

import { ThemeOptions, THEME_OPTIONS } from '../types';
import { Theme, themeProperties, Themes } from '../types/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  static readonly prefix = 'ds';
  static readonly id = `${ThemeService.prefix}-theme`;
  static readonly defaultTheme: keyof Themes = 'light';

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    @Inject(THEME_OPTIONS) private _themeOptions: ThemeOptions
  ) { }

  setThemes() {
    Object.keys(this._themeOptions.themes).forEach((theme) => this.setTheme(theme as keyof Themes));
  }

  setTheme(theme: keyof Themes) {
    const styles = Object.entries(themeProperties).flatMap(([area, value]) => this.getStyles(theme, area as keyof Theme, value || ['']));
    const stylesheet = this.getThemeStylesheet(theme);
    // (stylesheet as any).replaceChildren(':root{', ...styles, '}');
    stylesheet.textContent = `:root{${styles.join('')}}`;
  };

  protected getStyles(theme: keyof Themes, area: keyof Theme, [alias, uom = '']: [string, string?]): string[] {
    // const tokenPrefix = `--${ThemeService.prefix}${ theme === ThemeService.defaultTheme ? '' : `-${theme}` }-${alias}`;
    const tokenPrefix = `--${ThemeService.prefix}-${alias}`;

    return Object.entries(this._themeOptions.themes[theme][area]).flatMap(([key, value]) =>
      value !== null && typeof value === 'object'
      ? Object.entries(value).map(([subkey, subvalue]) => `${tokenPrefix}-${key}-${subkey}:${subvalue}${uom};`)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      : `${tokenPrefix}${isNaN(key as any) ? '-' : ''}${key}:${value}${uom};`
    );
  }

  protected getThemeStylesheet(theme: keyof Themes): HTMLStyleElement {
    const stylesheetId = `${ThemeService.id}-${theme}`;
    let stylesheet = this._document.getElementById(stylesheetId) as HTMLStyleElement;

    if (!stylesheet) {
      stylesheet = this._document.createElement('style');
      stylesheet.id = stylesheetId;
      stylesheet.media = `(prefers-color-scheme: ${theme})`;
      this._document.head.append(stylesheet);
    }

    return stylesheet;
  }
}

