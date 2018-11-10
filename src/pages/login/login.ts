import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
              public authService: AuthProvider,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    let toast = this.toastCtrl.create({
      message: "Bem vindo!",
      duration: 3000,
    });
    toast.present();
    this.authService.login(this.credential);
    this.navCtrl.push(HomePage, {
    });
  }

}
