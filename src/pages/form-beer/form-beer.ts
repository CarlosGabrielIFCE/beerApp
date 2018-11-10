import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-form-beer',
  templateUrl: 'form-beer.html',
})
export class FormBeerPage {
  beer = {name: "", type: "", description: ""};
  private url: string = "https://beerappi.herokuapp.com/";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient,
              public toastCtrl: ToastController) {
  }

  saveBeer(beer) {
    this.http.post(this.url + "cervejas/", beer)
      .subscribe(data => {
        let toast = this.toastCtrl.create({
          message: "Cerveja criada com sucesso!",
          duration: 3000,
        })
        toast.present();
        this.navCtrl.push(HomePage);
      }), error => {
        let toast = this.toastCtrl.create({
          message: error,
          duration: 3000,
        })
        toast.present();
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormBeerPage');
  }

}
