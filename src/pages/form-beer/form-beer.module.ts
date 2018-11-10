import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormBeerPage } from './form-beer';

@NgModule({
  declarations: [
    FormBeerPage,
  ],
  imports: [
    IonicPageModule.forChild(FormBeerPage),
  ],
})
export class FormBeerPageModule {}
