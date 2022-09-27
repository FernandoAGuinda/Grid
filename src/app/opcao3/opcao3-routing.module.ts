import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Opcao3Page } from './opcao3.page';

const routes: Routes = [
  {
    path: '',
    component: Opcao3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Opcao3PageRoutingModule {}
