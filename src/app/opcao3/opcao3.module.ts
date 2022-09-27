import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Opcao3PageRoutingModule } from './opcao3-routing.module';

import { Opcao3Page } from './opcao3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Opcao3PageRoutingModule
  ],
  declarations: [Opcao3Page]
})
export class Opcao3PageModule {}
