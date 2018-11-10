import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContaBeerPage } from './conta-beer';

@NgModule({
  declarations: [
    ContaBeerPage,
  ],
  imports: [
    IonicPageModule.forChild(ContaBeerPage),
  ],
})
export class ContaBeerPageModule {}
