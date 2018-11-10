//Modules
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
import { IonicStorageModule } from '@ionic/storage';
import { AuthProvider } from '../providers/auth/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//Pages
import { BeerInfoPage } from '../pages/beer-info/beer-info';
import { FormBeerPage } from '../pages/form-beer/form-beer';
import { LoginPage } from '../pages/login/login';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BeerInfoPage,
    FormBeerPage,
    LoginPage
  ],
  imports: [
    IonicStorageModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BeerInfoPage,
    FormBeerPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HTTP,
    AuthProvider,
    
  ]
})
export class AppModule {}
