import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloComponent } from './hello/hello.component';
import { ButtonComponent } from './button/button.component';

import { DSDirective } from './directives/ds.directive';
import { ThemeOptions, THEME_OPTIONS } from './types';
import { themes } from './types/theme';

@NgModule({
  imports: [CommonModule],
  declarations: [HelloComponent, ButtonComponent, DSDirective],
  exports: [HelloComponent, ButtonComponent, DSDirective],
})
export class DsModule {
  static withOptions(
    options: ThemeOptions = { themes }
  ): ModuleWithProviders<DsModule> {
    return {
      ngModule: DsModule,
      providers: [{ provide: THEME_OPTIONS, useValue: options }],
    };
  }
}
