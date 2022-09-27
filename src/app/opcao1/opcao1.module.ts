import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Opcao1PageRoutingModule } from './opcao1-routing.module';

import { Opcao1Page } from './opcao1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Opcao1PageRoutingModule
  ],
  declarations: [Opcao1Page]
})
export class Opcao1PageModule {
  
}
