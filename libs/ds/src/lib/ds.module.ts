import { ModuleWithProviders, NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { DSDirective } from './directives/ds.directive';
import { HelloComponent } from './hello/hello.component';
import { ThemeService } from './services/theme.service';
import { ThemeOptions, THEME_OPTIONS } from './types';
import { themes } from './types/theme';
import { DSIsLoadingDirective } from './directives/is-loading.directive ';
import { IconComponent } from './icon/icon.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HelloComponent,
    ButtonComponent,
    IconComponent,
    DSDirective,
    DSIsLoadingDirective
  ],
  exports: [
    HelloComponent,
    ButtonComponent,
    IconComponent,
    DSDirective,
    DSIsLoadingDirective
  ]
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
      providers: [{ provide: THEME_OPTIONS, useValue: options }],
    };
  }
}
