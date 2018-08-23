import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModeratePage } from './moderate';


@NgModule({
  declarations: [
    ModeratePage,
  ],
  imports: [
    IonicPageModule.forChild(ModeratePage)
  ],
})
export class ModeratePageModule { }