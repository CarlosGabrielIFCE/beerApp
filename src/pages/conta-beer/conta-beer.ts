import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContaBeerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conta-beer',
  templateUrl: 'conta-beer.html',
})
export class ContaBeerPage {
  valor: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.valor = this.navParams.get('valor');
    console.log(this.valor);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContaBeerPage');
  }
  
  backToHome() {
    this.navCtrl.pop();
  }

}
