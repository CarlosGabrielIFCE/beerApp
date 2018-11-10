import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-beer-info',
  templateUrl: 'beer-info.html',
})
export class BeerInfoPage {
  public beer: any = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient,
              public toastCtrl: ToastController) {
    let beer_id = this.navParams.get('beer_id');
    let api_url = this.navParams.get('api_url');

    this.http.get(api_url + "/cervejas/" + beer_id)
                .subscribe(data => {
                  this.beer = data;
                })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeerInfoPage');
  }

}
