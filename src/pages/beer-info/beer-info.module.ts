import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeerInfoPage } from './beer-info';

@NgModule({
  declarations: [
    BeerInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BeerInfoPage),
  ],
})
export class BeerInfoPageModule {}
