import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Opcao5Page } from './opcao5.page';

const routes: Routes = [
  {
    path: '',
    component: Opcao5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Opcao5PageRoutingModule {}
