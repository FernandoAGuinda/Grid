import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Opcao4Page } from './opcao4.page';

const routes: Routes = [
  {
    path: '',
    component: Opcao4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Opcao4PageRoutingModule {}
