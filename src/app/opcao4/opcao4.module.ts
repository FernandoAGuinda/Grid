import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Opcao4PageRoutingModule } from './opcao4-routing.module';

import { Opcao4Page } from './opcao4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Opcao4PageRoutingModule
  ],
  declarations: [Opcao4Page]
})
export class Opcao4PageModule {}
