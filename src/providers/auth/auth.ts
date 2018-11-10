import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';


@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient,
              public storage: Storage,
              public toastCtrl: ToastController
              ) {
    console.log('Hello AuthProvider Provider');
  }

  login(credentials) {
    return this.http.get("https://beerappi.herokuapp.com/login" , credentials)
                    .subscribe(data => {
                      this.storage.set('token', data);
                    }), error => {
                      console.log("Usuário ou senha incorretos");
                    }
  }

  userIsLogged() {
    return this.storage.get('token').then(val => {
      if(val) {
        return val;
      }else {
        let toast = this.toastCtrl.create({
          message: "É preciso logar para acessar!",
          duration: 3000,
        });
        toast.present();
        return false;
      }
    });
  }

  logout() {
    this.storage.remove('token');
  }



}
