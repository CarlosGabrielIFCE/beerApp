import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private credential: Object = {
    email: '',
    password: ''
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public authService: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    console.log(this.credential);
    this.authService.login(this.credential);
    this.navCtrl.push(HomePage);
  }

}
