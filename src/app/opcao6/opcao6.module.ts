import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Opcao6PageRoutingModule } from './opcao6-routing.module';

import { Opcao6Page } from './opcao6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Opcao6PageRoutingModule
  ],
  declarations: [Opcao6Page]
})
export class Opcao6PageModule {}
