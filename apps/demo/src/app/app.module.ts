import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DsModule } from '@radius-angular/ds';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DsModule.withOptions()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
