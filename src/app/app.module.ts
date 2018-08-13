import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { HttpClientModule } from '@angular/common/http';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ClaimPage } from '../pages/claim/claim';
import { PolicyPage } from '../pages/policy/policy';
import { ClaimDetailsPage } from '../pages/claimdetails/claimdetails';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ClaimServiceProvider } from '../providers/claim-service/claim-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ClaimPage,
    PolicyPage,
    ClaimDetailsPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ClaimPage,
    PolicyPage,
    ClaimDetailsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClaimServiceProvider
  ]
})
export class AppModule {}
