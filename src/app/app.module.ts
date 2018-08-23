import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { IonicStorageModule } from '@ionic/storage';
import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

import { MyApp } from './app.component';
import { SlidesPage } from '../pages/slides/slides';



@NgModule({
  declarations: [
    MyApp,
    SlidesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, ['lokijs']),
    IonicStorageModule.forRoot(),
    RoundProgressModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SlidesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}