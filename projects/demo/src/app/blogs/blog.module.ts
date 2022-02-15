import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DsModule } from '../../../../ds/src/public-api';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './components/blog-list.component';

const routes: Routes = [{
  path: '',
  component: BlogListComponent
}];

@NgModule({
  declarations: [BlogListComponent],
  imports: [
    CommonModule,
    DsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BlogModule { }
