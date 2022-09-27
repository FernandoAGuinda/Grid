import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Opcao2PageRoutingModule } from './opcao2-routing.module';

import { Opcao2Page } from './opcao2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Opcao2PageRoutingModule
  ],
  declarations: [Opcao2Page]
})
export class Opcao2PageModule {}
