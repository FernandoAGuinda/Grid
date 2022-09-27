import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Opcao6Page } from './opcao6.page';

const routes: Routes = [
  {
    path: '',
    component: Opcao6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Opcao6PageRoutingModule {}
