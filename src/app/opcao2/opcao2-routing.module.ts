import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Opcao2Page } from './opcao2.page';

const routes: Routes = [
  {
    path: '',
    component: Opcao2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Opcao2PageRoutingModule {}
