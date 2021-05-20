import { ModuleWithProviders, NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { HelloComponent } from './hello/hello.component';
import { ThemeService } from './services/theme.service';
import { ThemeOptions, THEME_OPTIONS } from './types';
import { themes } from './types/theme';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HelloComponent,
    ButtonComponent
  ],
  exports: [HelloComponent, ButtonComponent]
})
export class DsModule {
  constructor (themeService: ThemeService) {
    themeService.setTheme('light');
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
