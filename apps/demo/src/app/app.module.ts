import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DsModule } from '@radius-angular/ds';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
