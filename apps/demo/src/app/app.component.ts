import { Component } from '@angular/core';

import { ThemeService } from '@radius-angular/ds';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';

  constructor (private _themeService: ThemeService) {
  }

  onClick() {
    // this._themeService.setTheme('dark');
  }
}
