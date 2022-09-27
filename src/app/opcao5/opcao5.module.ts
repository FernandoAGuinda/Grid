import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Opcao5PageRoutingModule } from './opcao5-routing.module';

import { Opcao5Page } from './opcao5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Opcao5PageRoutingModule
  ],
  declarations: [Opcao5Page]
})
export class Opcao5PageModule {}
