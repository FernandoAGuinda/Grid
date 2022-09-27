import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Opcao1Page } from './opcao1.page';

const routes: Routes = [
  {
    path: '',
    component: Opcao1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Opcao1PageRoutingModule {}
