import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyReportPage } from './daily-report';
import {RoundProgressModule} from 'angular-svg-round-progressbar';


@NgModule({
  declarations: [
    DailyReportPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyReportPage),
       RoundProgressModule
  ],
})
export class DailyReportPageModule { }