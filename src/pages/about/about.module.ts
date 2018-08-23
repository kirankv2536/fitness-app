import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';
import {RoundProgressModule} from 'angular-svg-round-progressbar';


@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
       RoundProgressModule
  ],
})
export class AboutPageModule { }