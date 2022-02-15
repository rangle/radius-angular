import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { MoviesComponent } from './movies/movies.component';
import { DsModule } from '../../../../ds/src/public-api';
import { CommonModule } from '@angular/common';
import { EditorModule } from '../editor/editor.module';


const routes: Routes = [{
  path: '',
  component: MoviesComponent
}];

@NgModule({
  declarations: [NavComponent, NavItemComponent, ListComponent, ListItemComponent, MoviesComponent],
  imports: [
    CommonModule,
    DsModule,
    EditorModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MoviesModule { }
