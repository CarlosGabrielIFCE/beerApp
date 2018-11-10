import { Component } from '@angular/core';
import { NavController, ActionSheetController, ToastController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';

//Pages
import { BeerInfoPage } from '../beer-info/beer-info';
import { FormBeerPage } from '../form-beer/form-beer';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { ContaBeerPage } from '../conta-beer/conta-beer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private url: string = 'https://beerappi.herokuapp.com';
  public cervejas: any;
  public valor: number = 0;

  ionViewDidLoad() {

    this.http.get(this.url + "/cervejas")
    .subscribe(data => {
      this.cervejas = data;
      
    })
  }


  constructor(public navCtrl: NavController,
              public http: HttpClient,
              public actionSheetCtrl: ActionSheetController,
              public toastCtrl: ToastController,
              public authService: AuthProvider,
              public platform: Platform,
              public navParams: NavParams,
              public modalCtrl: ModalController) {

      this.http.get(this.url + "/cervejas")
                .subscribe(data => {
                  this.cervejas = data;
                  for(let i = 0;i < this.cervejas.length;i++) {
                    console.log(this.cervejas[i].price);
                    this.valor += parseFloat(this.cervejas[i].price);
                  } 
                  console.log(this.valor);
                })

  }

  getBeerInfo(id) {
    this.navCtrl.push(BeerInfoPage, {
      'beer_id': id,
      'api_url': this.url
    });
  }

  showConta() {
    let contaModal = this.modalCtrl.create(ContaBeerPage, {
      valor: this.valor,
    })
    contaModal.present();
  }

  createBeer() {
    this.navCtrl.push(FormBeerPage);
  }

  beerPressed(id) {
    console.log(id);
    const opcao = this.actionSheetCtrl.create({
      title: "Opções",
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.http.delete(this.url + "/cervejas/" + id)
              .subscribe(() => {
                let toast = this.toastCtrl.create({
                  message: "Item excluido com sucesso!",
                  duration: 3000,
                })
                toast.present();
                this.ionViewDidLoad();
              })
          }
        },{
          text: "Cancel",
          role: 'cancel',
          handler: () => {
            console.log("Botão de cancelar clicado!")
          }
        }
      ]
    });
    opcao.present();
  }

  backToLogin() {
    this.navCtrl.push(LoginPage);
  }

}
