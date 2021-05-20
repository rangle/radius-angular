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

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    @Inject(THEME_OPTIONS) private _themeOptions: ThemeOptions
  ) { }

  setTheme(theme: keyof Themes) {
      const styles = Object.entries(themeProperties).flatMap(([area, value]) => this.getStyles(theme, area as keyof Theme, value || ['']));
      let stylesheet = this._document.getElementById(ThemeService.id);

      if (!stylesheet) {
        stylesheet = this._document.createElement('style');
        stylesheet.id = ThemeService.id;
        this._document.head.append(stylesheet);
      }

      // (stylesheet as any).replaceChildren(':root{', ...styles, '}');
      stylesheet.textContent = `:root{${styles.join('')}}`;
    };

  protected getStyles(theme: keyof Themes, area: keyof Theme, [alias, uom = '']: [string, string?]): string[] {
    return Object.entries(this._themeOptions.themes[theme][area]).flatMap(([key, value]) =>
      value !== null && typeof value === 'object'
      ? Object.entries(value).map(([subkey, subvalue]) => `--${ThemeService.prefix}-${alias}-${key}-${subkey}:${subvalue}${uom};`)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      : `--${ThemeService.prefix}-${alias}${isNaN(key as any) ? '-' : ''}${key}:${value}${uom};`
    );
  }
}

