import { ModuleWithProviders, NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsButtonComponent } from './button/button.component';
import { DsDirective } from './directives/ds.directive';
import { DsIsLoadingDirective } from './directives/is-loading.directive ';
import { DsIconComponent } from './icon/icon.component';
import { ThemeService } from './services/theme.service';
import { ThemeOptions, THEME_OPTIONS } from './types';
import { themes } from './types/theme';
import { DsCheckboxComponent } from './checkbox/checkbox.component';
import { DsLabelComponent } from './label/label.component';

const DS_DECLARATIONS = [
    DsButtonComponent,
    DsCheckboxComponent,
    DsIconComponent,
    DsLabelComponent,
    DsDirective,
    DsIsLoadingDirective
];

@NgModule({
  imports: [CommonModule],
  declarations: DS_DECLARATIONS,
  exports: DS_DECLARATIONS
})
export class DsModule {
  constructor (themeService: ThemeService) {
    themeService.setThemes();
  }

  static withOptions(
    options: ThemeOptions = { themes }
  ): ModuleWithProviders<DsModule> {
    return {
      ngModule: DsModule,
      providers: [{ provide: THEME_OPTIONS, useValue: options }]
    };
  }
}
